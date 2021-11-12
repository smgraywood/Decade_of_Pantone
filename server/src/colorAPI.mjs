import _fetch from "isomorphic-fetch";

const fetchColorData = () => {
let url = "http://colormind.io/api/";
let data = { model: "default" };
return _fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
})
    .then((response) => response.json())
    .then((data) => {
    console.log("Success:", data.result);
    return data.result;
    })
    .catch((error) => {
      // handle the error
    console.log(error);
    });
};

export default fetchColorData;
