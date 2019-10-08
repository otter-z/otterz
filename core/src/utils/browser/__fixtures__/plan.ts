const SAMPLE_PLAN = {
  "websiteURL": "https://www.telenor.se/handla/mobiler/samsung/galaxy-s10-plus",
  "urlFilters": ["https://www.telenor.se/handla/mobiler.*", "https://www.telenor.se/service.*"],
  config: {
    urlRevisit: true,
    domainWhiteList: ['https://*.wikipedia.orgs', 'https://amazon.co.uk'],
    domainBlackList: ['https://amazon.com'],
    filterURL: ['Regular Expression'],
    maxDeep: 2,
    extractNewURLSelector: 'a[href] default value',
    changeUserAgent: "it's a function",
    randomDelay: "its a function to return random delay value",
    maxRetry: 2,
    maxPageTimeout: 1000,
    parser: 'DYNAMIC or STATIC'
  },
  data: [
    {
      "object-type": "phone",
      "root-selector": "#cart-anchor",
      "properties": [
        { // the result is single value
          "propName": "model",
          "valueType": "TEXT",
          "selector": ".class"
        },
        { // the result is single value 
          "propName": "price",
          "valueType": "ATTRIBUTE",
          "selector": ".class"
        },
        { // the result is an array of children texts
          "property-name": "brand",
          "valueType": "CHILD_TEXT",
          "child-selector": ".class",
          "selector": ".class"
        },
        { // the result is an array of children attributes. 
          "propName": "model",
          "valueType": "CHILD_ATTRIBUTE",
          "attribute": "href",
          "attribute-selector": ".class",
          "selector": ".class"
        },
        {
          "propName": "model",
          "properties": [],
          "selector": ".class"
        },

      ]
    }
  ]



};
