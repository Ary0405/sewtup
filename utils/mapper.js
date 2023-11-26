const { createHash } = require('crypto');

export const mapper = (input1, input2) => {
    const inputs = [input1, input2].sort();
    const hash = createHash('sha256');
    return hash.update(`${inputs[0]}${process.env.NEXT_PUBLIC_HASH_SECRET}${inputs[1]}`).digest('hex').slice(5, 21);
}
