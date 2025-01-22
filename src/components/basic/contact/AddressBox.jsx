import React, { useContext, useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { ContactContext } from "../../../context/ContactProvider";

const initData = {
    postCode: "",
    address: "",
    detailAddress: ""
}

const AddressForm = () => {
    const postcodeScriptUrl = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    const open = useDaumPostcodePopup(postcodeScriptUrl);
    const { setFormData } = useContext(ContactContext);
    const [addressData, setAddressData] = useState(initData);

    const handleComplete = (data) => {
        let addr = '';
        let extraAddr = '';

        if (data.userSelectedType === 'R') {
            addr = data.roadAddress;
        } else {
            addr = data.jibunAddress;
        }

        if (data.userSelectedType === 'R') {
            if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                extraAddr += data.bname;
            }

            if (data.buildingName !== '' && data.apartment === 'Y') {
                extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
            }

            if (extraAddr !== '') {
                extraAddr = ' (' + extraAddr + ')';
            }

            addr = addr + " " + extraAddr;
            setAddressData((prev) => ({ ...prev, postCode: data.zonecode }));
            setAddressData((prev) => ({ ...prev, address: addr }));
            setAddressData((prev) => ({ ...prev, detailAddress: "" }));
            setFormData(prev => ({ ...prev, postCode: data.zonecode, address: addr }));
            document.getElementById("detailAddress").focus();
        }
    }

    const handleClick = (e) => {
        e.preventDefault();
        open({ onComplete: handleComplete });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddressData((prev) => ({ ...prev, [name]: value }));
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    return (
        <div className="font-body">
            <label htmlFor="type" className="block text-sm lg:text-base font-semibold text-gray-700">
                시공건물주소
            </label>

            {/* 주소 검색 */}
            <div className="w-full flex flex-col-reverse sm:flex-row mt-1">
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={addressData.address}
                    onChange={handleChange}
                    placeholder="주소를 검색하세요"
                    className="block sm:w-4/5 w-full p-1 border-b border-gray-300 focus:border-gray-500 text-sm lg:text-base placeholder:text-sm lg:placeholder:text-base"
                    disabled
                />
                <button
                    onClick={handleClick}
                    className="block sm:w-1/5 w-full px-4 py-1.5 sm:py-2 bg-black text-white text-sm lg:text-base"
                >
                    주소검색
                </button>
            </div>

            {/* 상세 주소 입력 */}
            <div>
                <input
                    type="text"
                    id="detailAddress"
                    name="detailAddress"
                    value={addressData.detailAddress}
                    onChange={handleChange}
                    placeholder="상세 주소를 입력하세요"
                    className="block w-full p-1 mt-1 sm:mt-2 border-b border-gray-300 focus:border-gray-500 focus:outline-none text-sm lg:text-base placeholder:text-sm lg:placeholder:text-base"
                />
            </div>
        </div>
    );
};

export default AddressForm;
