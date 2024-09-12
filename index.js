document.querySelector("#form").addEventListener("submit", jobsubmit);
let jobArray;
if (localStorage.getItem("joblist") !== null) {
  jobArray = JSON.parse(localStorage.getItem("joblist"));
} else {
  jobArray = [];
}

function jobsubmit() {
  event.preventDefault();
  let jobObject = {
    personName: document.querySelector("#name").value,
    personEmail: form.email.value,
    personRole: form.role.value,
    personSalary: form.salary.value,
  };

  jobArray.push(jobObject);
  localStorage.setItem("joblist", JSON.stringify(jobArray));
  window.location.href = "application.html";
}
