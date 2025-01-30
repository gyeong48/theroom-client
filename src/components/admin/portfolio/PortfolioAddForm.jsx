import React, { useContext } from 'react'
import GridInputBox from '../common/GridInputBox';
import GridSelectBox from '../common/GridSelectBox';
import AddressBox from './AddressBox';
import { PortfolioAddContext } from '../../../context/PortfolioAddProvider';
import ThumbnailUploadBox from './ThumbnailUploadBox';
import ImageFileUploadBox from './ImageFileUploadBox';

function PortfolioAddForm() {
  const context = PortfolioAddContext;
  const { formData } = useContext(context);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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

        <div className='flex justify-center'>
          <button
            onClick={handleSubmit}
            className='text-sm md:text-base font-body bg-black hover:opacity-75 text-white px-6 py-2 rounded-md'>등록</button>
        </div>
      </form>
    </div>
  )
}

export default PortfolioAddForm