export const validate = (name, value) => {
    let error = "";

    if (name === "customer" && (!value || value.length < 2)) {
        error = "사용자 이름은 2자 이상이어야 합니다.";
    }

    if (name === "phoneNumber" && (!value || value.length < 9)) {
        error = "연락처는 9자 이상이어야 합니다.";
    }

    if (name === "buildingType" && (!value || value === "")) {
        error = "건물 유형을 선택하하세요.";
    }

    if (name === "exclusiveArea" && (!value || value === "")) {
        error = "분양 면적(평수)를 입력하세요.";
    }

    if (name === "mainAddress" && (!value || value === "")) {
        error = "주소를 입력하세요.";
    }

    if (name === "detailAddress" && (!value || value === "")) {
        error = "상세 주소를 입력하세요.";
    }

    if (name === "personalInformationAgree" && (!value || value === false)) {
        error = "비동의";
    }

    if (name === "title" && (!value || value === "")) {
        error = "제목은 필수입니다.";
    }

    if (name === "thumbnail" && (!value || value === null)) {
        error = "대표 이미지는 필수입니다.";
    }

    if (name === "newPasswordCheck" && (value === false)) {
        error = "변경할 비밀번호와 일치하지 않습니다.";
    }


    console.log(error);


    return error;
}

