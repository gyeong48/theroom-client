import React, { useState, useContext } from 'react'
import GridInputBox from '../common/GridInputBox';
import GridSelectBox from '../common/GridSelectBox';
import AddressBox from './AddressBox';
import ThumbnailUploadBox from './ThumbnailUploadBox';
import ImageFileUploadBox from './ImageFileUploadBox';
import { PortfolioModifyContext } from '../../../context/PortfolioModifyProvider';
import CheckModal from '../../common/CheckModal';
import { useNavigate, useParams } from 'react-router-dom';

function PortfolioModifyForm() {
  const { id } = useParams();
  const context = PortfolioModifyContext;
  const navigate = useNavigate();
  const { formData } = useContext(context);
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const portfolioAddFormData = new FormData();

    for (const [key, value] of Object.entries(formData)) {
      portfolioAddFormData.append(key, value);
    }

    for (const [key, value] of portfolioAddFormData.entries()) {
      console.log(`${key} : ${value}`);
    }

    {/**api 연결 */}
    //navigate({ pathname: `../portfolio/${id}` });
  }

  const handleOpenModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  }

  const handleCheck = () => {
    //삭제 요청
    setIsModalOpen(false);
    navigate({ pathname: "../portfolio" });
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
          />
          <GridSelectBox
            isLabel={true}
            label={"유형"}
            id={"type"}
            options={[{ value: "APARTMENT", content: "아파트" }, { value: "SMALLAPARTMENT", content: "빌라" }, { value: "HOUSE", content: "주택" }]}
            placeholder={"선택"}
            context={context}
          />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:space-x-4 mb-2 lg:space-y-0 space-y-2'>
          <GridInputBox
            label={"공급면적"}
            id={"supplyArea"}
            type={"number"}
            placeholder={"공급 면적을 입력해주세요 - 단위: 평"}
            context={context}
          />
          <GridInputBox
            label={"전용면적"}
            id={"exclusiveArea"}
            type={"number"}
            placeholder={"전용 면적을 입력해주세요 - 단위: 평"}
            context={context}
          />
        </div>

        {/* 주소 검색 */}
        <AddressBox context={context} />

        <div className='grid grid-cols-1 lg:grid-cols-2 lg:space-x-4 mb-2 lg:space-y-0 space-y-2'>
          <GridInputBox
            label={"공사시작일"}
            id={"startDate"}
            type={"date"}
            placeholder={null}
            context={context}
          />
          <GridInputBox
            label={"공사완료일"}
            id={"endDate"}
            type={"date"}
            placeholder={null}
            context={context}
          />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 lg:space-x-4 mb-2 lg:space-y-0 space-y-2'>
          <GridInputBox
            label={"시공비용"}
            id={"budget"}
            type={"number"}
            placeholder={"시공비용을 입력해 주세요 - 단위: 만원"}
            context={context}
          />
          <GridSelectBox
            isLabel={true}
            label={"공사범위"}
            id={"scope"}
            placeholder={"선택"}
            options={[{ value: "PART", content: "부분시공" }, { value: "ALL", content: "전체시공" }]}
            context={context}
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
            onClick={(e) => handleOpenModal(e)}
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