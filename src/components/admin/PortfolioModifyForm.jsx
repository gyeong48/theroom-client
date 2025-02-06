import React, { useState, useContext, useEffect } from 'react'
import GridInputBox from '../common/GridInputBox';
import GridSelectBox from '../common/GridSelectBox';
import AddressBox from '../common/AddressBox';
import ThumbnailUploadBox from './ThumbnailUploadBox';
import ImageFileUploadBox from './ImageFileUploadBox';
import { PortfolioModifyContext } from '../../context/PortfolioModifyProvider';
import CheckModal from '../common/CheckModal';
import { useNavigate, useParams } from 'react-router-dom';
import { deletePortfolio, putModifyPortfolio } from '../../api/portfolioApi';
import { defaultDate } from '../../util/localDate';

function PortfolioModifyForm() {
  const localDate = defaultDate
  const navigate = useNavigate();
  const context = PortfolioModifyContext;
  const { id } = useParams();
  const { formData } = useContext(context);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const uploadImageFilenames = [];
    const portfolioModifyFormData = new FormData();

    for (let i = 0; i < formData.imageFiles.length; i++) {
      if (formData.imageFiles[i] instanceof File) {
        portfolioModifyFormData.append("imageFiles", formData.imageFiles[i]);
      } else {
        uploadImageFilenames.push(formData.imageFiles[i].uploadedName);
      }
    }

    if (formData.imageFiles.length === 0) {
      portfolioModifyFormData.append("imageFiles", null);
    }

    portfolioModifyFormData.append("title", formData.title);
    portfolioModifyFormData.append("buildingType", formData.buildingType);
    portfolioModifyFormData.append("supplyArea", formData.supplyArea ? formData.supplyArea : 0);
    portfolioModifyFormData.append("exclusiveArea", formData.exclusiveArea ? formData.exclusiveArea : 0);
    portfolioModifyFormData.append("startDate", formData.startDate === "" ? localDate : formData.startDate);
    portfolioModifyFormData.append("endDate", formData.endDate === "" ? localDate : formData.endDate);
    portfolioModifyFormData.append("mainAddress", formData.mainAddress);
    portfolioModifyFormData.append("detailAddress", formData.detailAddress);
    portfolioModifyFormData.append("postCode", formData.postCode);
    portfolioModifyFormData.append("latitude", formData.latitude ? formData.latitude : 0);
    portfolioModifyFormData.append("longitude", formData.longitude ? formData.longitude : 0);
    portfolioModifyFormData.append("budget", formData.budget ? formData.budget : 0);
    portfolioModifyFormData.append("interiorType", formData.interiorType);
    portfolioModifyFormData.append("thumbnail", formData.thumbnail ? formData.thumbnail : null);
    portfolioModifyFormData.append("thumbnailName", formData.thumbnailName);
    portfolioModifyFormData.append("uploadImageFilenames", uploadImageFilenames);

    putModifyPortfolio(id, portfolioModifyFormData).then(res => {
      console.log(res);
      navigate({ pathname: `../portfolio/${id}` });
    })
  }

  const handleOpenModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  }

  const handleCheck = () => {
    deletePortfolio(id)
      .then((res) => {
        console.log(res.data);
        setIsModalOpen(false);
        navigate({ pathname: "../portfolio" });
      })
  }

  const handleCancel = () => {
    setIsModalOpen(false);
  }

  return (
    <div className="max-w-[1000px] mx-auto px-4 py-8 p-6 mt-6">
      <form className="pt-10 space-y-14 bg-white p-6">
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:space-x-4 mb-2 lg:space-y-0 space-y-2'>
          <GridInputBox
            label={"제목"}
            id={"title"}
            type={"text"}
            placeholder={"제목을 입력해주세요."}
            context={context}
            isModifiable={true}
          />
          <GridSelectBox
            isLabel={true}
            label={"유형"}
            id={"buildingType"}
            options={[{ value: "APARTMENT", content: "아파트" }, { value: "SMALLAPARTMENT", content: "빌라" }, { value: "HOUSE", content: "주택" }]}
            placeholder={"선택"}
            context={context}
            isModifiable={true}
          />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:space-x-4 mb-2 lg:space-y-0 space-y-2'>
          <GridInputBox
            label={"공급면적"}
            id={"supplyArea"}
            type={"number"}
            placeholder={"공급 면적을 입력해주세요 - 단위: 평"}
            context={context}
            isModifiable={true}
          />
          <GridInputBox
            label={"전용면적"}
            id={"exclusiveArea"}
            type={"number"}
            placeholder={"전용 면적을 입력해주세요 - 단위: 평"}
            context={context}
            isModifiable={true}
          />
        </div>

        {/* 주소 검색 */}
        <AddressBox context={context} isModifiable={true} />

        <div className='grid grid-cols-1 lg:grid-cols-2 lg:space-x-4 mb-2 lg:space-y-0 space-y-2'>
          <GridInputBox
            label={"공사시작일"}
            id={"startDate"}
            type={"date"}
            placeholder={null}
            context={context}
            isModifiable={true}
          />
          <GridInputBox
            label={"공사완료일"}
            id={"endDate"}
            type={"date"}
            placeholder={null}
            context={context}
            isModifiable={true}
          />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 lg:space-x-4 mb-2 lg:space-y-0 space-y-2'>
          <GridInputBox
            label={"시공비용"}
            id={"budget"}
            type={"number"}
            placeholder={"시공비용을 입력해 주세요 - 단위: 만원"}
            context={context}
            isModifiable={true}
          />
          <GridSelectBox
            isLabel={true}
            label={"공사범위"}
            id={"interiorType"}
            placeholder={"선택"}
            options={[{ value: "PART", content: "부분시공" }, { value: "ALL", content: "전체시공" }]}
            context={context}
            isModifiable={true}
          />
        </div>

        {/** 대표 이미지 업로드 박스 추가 */}
        <ThumbnailUploadBox context={context} />

        {/* 이미지 업로드 박스 추가 */}
        <ImageFileUploadBox context={context} />

        <div className='flex justify-center space-x-6'>
          <button
            onClick={handleSubmit}
            className='text-sm md:text-base font-body bg-black hover:opacity-75 text-white px-6 py-2 rounded-md'
          >
            저장
          </button>
          <button
            onClick={handleOpenModal}
            className='text-sm md:text-base font-body bg-red-400 hover:opacity-75 text-white px-6 py-2 rounded-md'
          >
            삭제
          </button>
        </div>
      </form>

      {isModalOpen &&
        <CheckModal
          title={"확인: 포트폴리오 삭제"}
          content={"포트폴리오를 삭제하시겠습니까?"}
          checkFn={handleCheck}
          cancelFn={handleCancel}
        />
      }
    </div>
  )
}

export default PortfolioModifyForm