export const isEmpty = (value: any) => {
    if (
        value === null ||
        value === undefined ||
        value === '' ||
        (value != null && typeof value == 'object' && !Object.keys(value).length)
    ) {
        return true;
    } else {
        return false;
    }
};

export const formatPhoneNumber = (str: string) => {
    const digits = str.replace(/\D/g, '');

    if (digits.length === 12) {
        return `${digits.slice(0, 4)}-${digits.slice(4, 8)}-${digits.slice(8, 12)}`;
    }

    if (digits.startsWith('02')) {
        if (digits.length === 6) {
            return `${digits.slice(0, 2)}-${digits.slice(2)}`;
        } else if (digits.length >= 7) {
            return `${digits.slice(0, 2)}-${digits.slice(2, digits.length - 4)}-${digits.slice(-4)}`;
        }
    } else if (/^01[016789]/.test(digits)) {
        if (digits.length === 7) {
            return `${digits.slice(0, 3)}-${digits.slice(3)}`;
        } else if (digits.length >= 8) {
            return `${digits.slice(0, 3)}-${digits.slice(3, digits.length - 4)}-${digits.slice(-4)}`;
        }
    } else if (/^0[3-9]\d/.test(digits)) {
        if (digits.length === 7) {
            return `${digits.slice(0, 3)}-${digits.slice(3)}`;
        } else if (digits.length >= 8) {
            return `${digits.slice(0, 3)}-${digits.slice(3, digits.length - 4)}-${digits.slice(-4)}`;
        }
    } else if (/^070/.test(digits)) {
        if (digits.length === 7) {
            return `${digits.slice(0, 3)}-${digits.slice(3)}`;
        } else if (digits.length >= 8) {
            return `${digits.slice(0, 3)}-${digits.slice(3, digits.length - 4)}-${digits.slice(-4)}`;
        }
    } else if (digits.length >= 8) {
        return `${digits.slice(0, 4)}-${digits.slice(4)}`;
    }

    return digits;
};

export const validators = {
    name: (value: string) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(value),

    age: (value: string) => /^[0-9]+$/.test(value),

    username: (value: string) => /^[A-Za-z0-9]+$/.test(value),

    password: (value: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(value),

    confirmPassword: (value: string, password: string) => value === password,

    phone: (value: string) => /^010\d{8}$/.test(value),

    email: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
};
