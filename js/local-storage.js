localStorage.setItem(
  "apiURL",
  "https://gamehub-laura-slivka.com/wp-json/wc/v3/products"
);
localStorage.setItem(
  "consumerKey",
  "ck_f3dcefb352d9c41f684a2fff80501dc96d3b2e13"
);
localStorage.setItem(
  "consumerSecret",
  "cs_f0193409447a533788500f023a2f72a6d0255ab2"
);

const apiURL = localStorage.getItem("apiURL");
const consumerKey = localStorage.getItem("consumerKey");
const consumerSecret = localStorage.getItem("consumerSecret");

export { apiURL, consumerKey, consumerSecret };

// -------------------

// old code I used with Noroff api
// localStorage.setItem("apiKey", "29198646-c187-49d9-ae44-65e15e1a0ffd");
// localStorage.setItem("apiURL", "https://v2.api.noroff.dev/gamehub");
// localStorage.setItem(
//   "accessToken",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzI4LCJuYW1lIjoibGFnb3JhY29kZXMiLCJlbWFpbCI6ImxhdXNsaTUxNzM4QHN0dWQubm9yb2ZmLm5vIiwiYmlvIjpudWxsLCJjcmVhdGVkIjoiMjAyNC0wMy0yOVQxNTozNzowMy43MzFaIiwidXBkYXRlZCI6IjIwMjQtMDMtMjlUMTU6Mzc6MDMuNzMxWiIsImNyZWRpdHMiOjEwMDAsInZlbnVlTWFuYWdlciI6ZmFsc2UsImF2YXRhciI6eyJpZCI6ImE5NzI1NDI4LTc1ZjEtNGM3OS1iMjQ2LTRiOTJkNGJiMDEyZSIsInVybCI6Imh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTc5NTQ3OTQ1NDEzLTQ5N2UxYjk5ZGFjMD9jcm9wPWVudHJvcHkmY3M9dGlueXNyZ2ImZml0PWNyb3AmZm09anBnJnE9ODAmaD00MDAmdz00MDAiLCJhbHQiOiJBIGJsdXJyeSBtdWx0aS1jb2xvcmVkIHJhaW5ib3cgYmFja2dyb3VuZCIsInNvY2lhbFBvc3RJZCI6bnVsbCwiYXVjdGlvbkxpc3RpbmdJZCI6bnVsbCwiaG9saWRhemVWZW51ZUlkIjpudWxsLCJ1c2VyQXZhdGFySWQiOjcyOCwidXNlckJhbm5lcklkIjpudWxsLCJib29rSWQiOm51bGwsIm9sZEdhbWVJZCI6bnVsbCwib25saW5lU2hvcFByb2R1Y3RJZCI6bnVsbCwicmFpbnlEYXlzUHJvZHVjdElkIjpudWxsLCJnYW1lSHViUHJvZHVjdElkIjpudWxsLCJzcXVhcmVFeWVzUHJvZHVjdElkIjpudWxsfSwiYmFubmVyIjp7ImlkIjoiMTI3MDJjMmQtZjBlYi00ZWI4LTljNzctNmY3ZGQxZGViZjI2IiwidXJsIjoiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1Nzk1NDc5NDU0MTMtNDk3ZTFiOTlkYWMwP2Nyb3A9ZW50cm9weSZjcz10aW55c3JnYiZmaXQ9Y3JvcCZmbT1qcGcmcT04MCZoPTUwMCZ3PTE1MDAiLCJhbHQiOiJBIGJsdXJyeSBtdWx0aS1jb2xvcmVkIHJhaW5ib3cgYmFja2dyb3VuZCIsInNvY2lhbFBvc3RJZCI6bnVsbCwiYXVjdGlvbkxpc3RpbmdJZCI6bnVsbCwiaG9saWRhemVWZW51ZUlkIjpudWxsLCJ1c2VyQXZhdGFySWQiOm51bGwsInVzZXJCYW5uZXJJZCI6NzI4LCJib29rSWQiOm51bGwsIm9sZEdhbWVJZCI6bnVsbCwib25saW5lU2hvcFByb2R1Y3RJZCI6bnVsbCwicmFpbnlEYXlzUHJvZHVjdElkIjpudWxsLCJnYW1lSHViUHJvZHVjdElkIjpudWxsLCJzcXVhcmVFeWVzUHJvZHVjdElkIjpudWxsfSwiaWF0IjoxNzExODI0MjAxfQ.1Ujav24Gntl6Zn9aV2qOnQuWKUp8JE27t3vi5ndl8q4"
// );

// const apiURL = localStorage.getItem("apiURL");
// const accessToken = localStorage.getItem("accessToken");
// const apiKey = localStorage.getItem("apiUrl");

// export { accessToken, apiKey, apiURL };
