import {Toast} from 'native-base';

let showToast = (text, duration = 3000) => {
    Toast.show({
        text: text,
        duration: duration
    })
};

let success = (text) => {
    showToast(text);
};

let errors = (error) => {
    if (error['code'] === 422) {
        showToast(error['data']['message']);
    } else if (error['code'] === 500) {
        showToast(error['data']['message']);
    } else {
        showToast(error['message']);
    }
};

export {
    showToast,
    success,
    errors,
};