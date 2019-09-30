import { HTML } from "../__fixtures__/sample";

const get = jest.fn(async (url) => {
    let result = HTML;
    if (url === "https://wikipedia.org") {
        result = HTML;
    }
    return {
        data: result,
        status: 200
    };
});
const create = jest.fn(() => ({ get }))


export default {
    get,
    create
};