console.log("js ready!!!");

const base_url = "https://api.genderize.io";

function showResult(name, gender, probability) {
  const predictionElement = document.getElementById("prediction");
  const genderTranslate = gender == "male" ? "cowok" : "cewek";
  const probabilityPercent = probability * 100;

  const predictionText = `Halo ${name}! Jenis Kelamin Kamu Kemungkinan Adalah ${genderTranslate} Sebesar ${probabilityPercent}%`;

  predictionElement.textContent = predictionText;
}

function showCode(text) {
  const predictionElement = document.getElementById("prediction");
  predictionElement.textContent = "";

  const codeElement = document.getElementById("code");
  codeElement.textContent = text;
}

async function predict(event) {
  if (event.key == "Enter") {
    const firstName = event.target.value;
    const queryUrl = `${base_url}?name=${firstName}&country_id=ID`;

    const response = await fetch(queryUrl);
    const result = await response.json();

    showResult(result.name, result.gender, result.probability);
  }
}

async function predict1() {
  showCode(arguments.callee.toString());

  const firstName = document.getElementById("first_name").value;
  if (!firstName) return;

  const queryUrl = `${base_url}?name=${firstName}&country_id=ID`;

  const response = await fetch(queryUrl);
  const result = await response.json();

  showResult(result.name, result.gender, result.probability);
}

async function predict2() {
  showCode(arguments.callee.toString());

  const firstName = document.getElementById("first_name").value;
  if (!firstName) return;

  const queryUrl = `${base_url}?name=${firstName}&country_id=ID`;

  try {
    const response = await axios.get(queryUrl);
    const result = response.data;

    showResult(result.name, result.gender, result.probability);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function predict3() {
  showCode(arguments.callee.toString());

  const firstName = document.getElementById("first_name").value;
  if (!firstName) return;

  const queryUrl = `${base_url}?name=${firstName}&country_id=ID`;

  fetch(queryUrl)
    .then((response) => response.json())
    .then((result) =>
      showResult(result.name, result.gender, result.probability)
    )
    .catch((error) => console.error("Error fetching data:", error));
}

function predict4() {
  showCode(arguments.callee.toString());

  const firstName = document.getElementById("first_name").value;
  if (!firstName) return;

  const queryUrl = `${base_url}?name=${firstName}&country_id=ID`;

  axios
    .get(queryUrl)
    .then((response) =>
      showResult(
        response.data.name,
        response.data.gender,
        response.data.probability
      )
    )
    .catch((error) => console.error("Error fetching data:", error));
}

function predict5() {
  showCode(arguments.callee.toString());

  const firstName = $("#first_name").val();
  if (!firstName) return;

  const queryUrl = `${base_url}?name=${firstName}&country_id=ID`;

  $.ajax({
    url: queryUrl,
    method: "GET",
    dataType: "json",
    success: function (result) {
      showResult(result.name, result.gender, result.probability);
    },
    error: function (error) {
      console.error("Error fetching data:", error);
    },
  });
}

function predict6() {
  showCode(arguments.callee.toString());

  const firstName = document.getElementById("first_name").value;
  if (!firstName) return;

  const queryUrl = `${base_url}?name=${firstName}&country_id=ID`;

  const xhr = new XMLHttpRequest();
  xhr.open("GET", queryUrl, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const result = JSON.parse(xhr.responseText);
        showResult(result.name, result.gender, result.probability);
      } else {
        console.error("Error fetching data:", xhr.statusText);
      }
    }
  };
  xhr.send();
}

async function predict7() {
  showCode(arguments.callee.toString());

  const firstName = document.getElementById("first_name").value;
  if (!firstName) return;

  const queryUrl = `${base_url}?name=${firstName}&country_id=ID`;

  try {
    const response = await axios({
      method: "get",
      url: queryUrl,
    });

    const result = response.data;
    showResult(result.name, result.gender, result.probability);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function predict8() {
  showCode(arguments.callee.toString());

  const firstName = document.getElementById("first_name").value;
  if (!firstName) return;

  const queryUrl = `${base_url}?name=${firstName}&country_id=ID`;

  try {
    const response = await fetch(queryUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    showResult(result.name, result.gender, result.probability);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}
