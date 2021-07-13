function makeSentence() {
    let word1 = document.getElementById("word1").value;
    let word2 = document.getElementById("word2").value;
    let word3 = document.getElementById("word3").value;
    let word3_check = document.getElementById("word3_check").checked;

    if (word3_check) {
        if (word1 === "" || word2 === "" || word3 === "") {
            alert("모든 칸을 입력해 주세요!")
            return;
        }
    } else {
        if (word1 === "" || word2 === "" ) {
            alert("모든 칸을 입력해 주세요!")
            return;
        }
    }

    const result_element = document.getElementById("result");

    let result = word1[1] + ". ";
    result += word1 + " ";
    result += word2[0] + ". ";
    result += word2 + " " + word1 + ". ";
    result += word1[1] + " ";
    result += word1[1] + word2[0] + ". ";

    if (word3_check) result += word3;
    else result += word2;

    result += ". " + word1[1] + ". ";
    result += word2.substr(0, 2) + ". " + word1 + " " + word1[1] + ". ";
    result += word2[0] + ". " + word2.substr(0, 2) + ". ";
    result += word1[1] + " " + word2.substr(2, 2) + " " + word1 + ". ";
    result += word2.substr(0, 2) + ". " + word2.substr(2, 2) + " ";
    result += word1[1] + ". " + word1 + " " + word1[1] + ". " + word1[1] + " " + word2[0] + ". ";
    result += word2.substr(0, 3) + ". " + word2[3] + word1[1] + " " + word1 + " " + word1[1] + ". ";

    if (word3_check) result += word3 + ". " + word1[1] + word1[1] + ". " + word1 + " ";
    else result += word2 + ". " + word1[1] + word1[1] + ". " + word1 + " ";

    result += word2[0] + ". " + word2 + " ";
    result += word1 + ". " + word1[1] + " " + word1[1] + word2[0] + ". ";
    result += word2 + ". " + word1[1] + ". ";
    result += word2.substr(0, 2) + ". ";
    result += word1 + " " + word1[1] + ". ";
    result += word2[0] +". " + word2.substr(0, 2) + ". ";
    result += word1[1] + " " + word2.substr(2, 2) + " ";
    result += word1 + ". " + word2.substr(0, 2) + ". ";

    result_element.innerHTML = result;

    return result;
}