export default function QuoteButton() {
    return (
        <div className="flex justify-center items-center">
            <div className="space-y-4 rounded-full border border-gray-400 px-12 py-8 bg-neutral-100 hover:cursor-pointer hover:scale-95 ease-in-out duration-100">
                <h4 className="text-xl font-body font-semibold text-center">온라인 견적 문의</h4>
                <p className="text-center">견적문의 페이지로 이동합니다.</p>
            </div>
        </div>
    );
}
