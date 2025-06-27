const Orders = () => {
  return (
    <div className="w-screen h-screen flex justify-end items-end px-[4rem] py-[4rem]">
        <div className="flex flex-col text-white" style={{ direction: 'rtl' }}>
            <h2 className="iransans_med text-3xl z-10">
                ارسال سفارشات
            </h2>
            <div className="w-[120%] h-[2.2rem] rounded-2xl bg-gradient-to-r from-[rgba(215,215,215,0.6)] from-0% to-[rgba(163,163,163,0.6)] to-65% backdrop-blur-3xl relative z-0 -top-[0.8rem] -right-3"></div>
            <h3 className="iransans_regular text-xl relative -top-3">
                مشتریان عزیز، سفارشات خود را به چند صورت می‌توانند دریافت کنند:
            </h3>
            <div className="iransans_light text-lg flex flex-col justify-center items-start gap-2 py-4 relative -top-3">
                <h4>
                    از طریق باربری یا پست، ارسال مستقیم از انبار مایسا
                </h4>
                <h4>
                    وسایل حمل و نقل عمومی (اتوبوس)
                </h4>
                <h4>
                    دریافت درب انبار مایسا
                </h4>
            </div>
            <button className="px-3 py-2 bg-white rounded-xl w-fit text-black iransans_med">
                تماس با ما
            </button>
        </div>
    </div>
  )
}

export default Orders;