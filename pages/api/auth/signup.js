import { hashSync } from "bcrypt";
import { createUser, fetchUser } from "../../../services/user.service";
import { withSessionRoute } from "../../../lib/ironOptions";

export default withSessionRoute(SignUp);

async function SignUp(req, res) {
    const body = await req.body;
    if (body.name === '' || body.email === '' || body.password === '') {
        res.send({ status: 400, message: "Please fill in all the fields" });
        return;
    }
    try {
        const response = await createUser({
            name: body.name,
            email: body.email,
            password: hashSync(body.password, 10),
            role: body.role,
        });
        const user = await fetchUser(body.email);
        req.session.user = user;
        await req.session.save();
        res.send({ status: 200, message: JSON.stringify(response) });
    } catch (error) {
        console.log(error.message);
        res.send({ status: 400, message: "Internal Server Error" });
    }

}