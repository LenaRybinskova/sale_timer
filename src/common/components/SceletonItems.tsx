export function ItemsListSkeleton() {
    return (
        <>
            <div className={'flex items-stretch justify-center gap-[8px] mb-9 w-full h-[260px]'}>
                {[1, 2, 3].map((item) => (
                    <div key={item} className="flex-1 border-2 border-border rounded-[20px] p-[45px_35px_26px_37px] animate-pulse">
                        <div className="h-8 bg-gray-200 rounded mb-4"></div>
                        <div className="h-6 bg-gray-200 rounded mb-2"></div>
                        <div className="h-12 bg-gray-200 rounded"></div>
                    </div>
                ))}
            </div>

            {/* Скелетон для forever тарифов */}
            {[1].map((item) => (
                <div key={item} className="w-full mb-[11px] border-2 border-border rounded-[20px] p-[31px_57px_26px_37px] animate-pulse">
                    <div className="h-10 bg-gray-200 rounded mb-4"></div>
                    <div className="h-8 bg-gray-200 rounded"></div>
                </div>
            ))}
        </>
    );
}