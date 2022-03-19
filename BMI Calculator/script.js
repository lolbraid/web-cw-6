// هنا سوف تنشئ دالة calculate
function calculate() {
  let height = document.getElementById("height");
  height = height.value;

  let weight = document.getElementById("weight");
  weight = weight.value;
  let BMI = weight / (height * height);
  let status = "";

  console.log(document.getElementById("status-img").src);
  if (!height | !weight) {
    alert("قم بادخال جميع البيانات المطلوبة");
  } else {
    document.getElementById("status-img").style.display = "inline";
    if (BMI < 18.5) {
      status = "تعاني من نقص في الوزن";
      document.getElementById("status-img").src =
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP._P9I-OpHo-QuMYxKeoF38AHaDh%26pid%3DApi&f=1";
    } else if (BMI >= 18.5 && BMI < 25) {
      status = "وزنك صحي";
      document.getElementById("status-img").src =
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1p1HP2NYhA1spVMPCwdsBQHaEU%26pid%3DApi&f=1";
    } else if (BMI >= 25 && BMI < 30) {
      status = "تعاني من زيادة في الوزن";
      document.getElementById("status-img").src =
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.UCxHpC5o4IgDs9E2H3MIVwHaEP%26pid%3DApi&f=1";
    } else if (BMI >= 30) {
      status = "تعاني من السمنة المفرطة";
      document.getElementById("status-img").src =
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.2mqMRyresAzrS9JK7pmQrgHaEW%26pid%3DApi&f=1";
    }

    document.getElementById("result").innerText = BMI.toFixed(2);
    document.getElementsByClassName("comment")[0].innerText = status;
  }
}
