const Doc = {
    find: (selector) => (document.querySelector(selector)),
    findAll: (selector) => (document.querySelectorAll(selector)),
    create: (type) => (document.createElement(type)),
};

export default Doc;
