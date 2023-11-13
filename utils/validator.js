const EXPERIENCE_LEVELS = ["ENTRY_LEVEL", "INTERMEDIATE", "EXPERT"];
const ORDER_STATUS = ["UNASSIGNED", "STICHING", "DESIGNING", "COMPLETED"];
const BID_STATUS = ["PENDING", "ACCEPTED", "REJECTED"];
const LOCATIONS = [
    "ANDHRA_PRADESH",
    "ARUNACHAL_PRADESH",
    "ASSAM",
    "BIHAR",
    "CHHATTISGARH",
    "GOA",
    "GUJARAT",
    "HARYANA",
    "HIMACHAL_PRADESH",
    "JHARKHAND",
    "KARNATAKA",
    "KERALA",
    "MADHYA_PRADESH",
    "MAHARASHTRA",
    "MANIPUR",
    "MEGHALAYA",
    "MIZORAM",
    "NAGALAND",
    "ODISHA",
    "PUNJAB",
    "RAJASTHAN",
    "SIKKIM",
    "TAMIL_NADU",
    "TELANGANA",
    "TRIPURA",
    "UTTAR_PRADESH",
    "UTTARAKHAND",
    "WEST_BENGAL",
    "REMOTE",
    "OTHER",
];

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phoneRegex = /^\d{10}$/;
const passwordRegex = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*).*$/;

export function isExperienceLevel(candidate) {
    return EXPERIENCE_LEVELS.includes(candidate);
}

export function isBidStatus(candidate) {
    return BID_STATUS.includes(candidate);
}

export function isOrderStatus(candidate) {
    return ORDER_STATUS.includes(candidate);
}
export function isLocation(candidate) {
    return LOCATIONS.includes(candidate);
}


function createValidator(re) {
    return (candidate) => re.test(candidate);
}

export const isEmail = createValidator(emailRegex);
export const isPhone = createValidator(phoneRegex);
export const isPassword = createValidator(passwordRegex);

