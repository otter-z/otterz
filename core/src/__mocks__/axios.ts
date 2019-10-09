import { BASIC_HTML  } from "../__fixtures__/html_page";

const get = jest.fn(async (url) => {
    let result = ``;
    if (url === "https://www.wikipedia.org") {
        result = BASIC_HTML;
    }
    if (url === "http://www.example.model") {
        result = BASIC_HTML;
    }
    return {
        data: result,
        status: 200
    };
});
const create = jest.fn(() => ({ get }));


export default {
    get,
    create
};
