import React from "react";

const Logo = ({ width = 105, height = 81, className }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 105 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M27.3303 44.6287C27.0336 44.6287 26.7481 44.5643 26.4738 44.4357C26.1995 44.307 25.9643 44.0693 25.7684 43.7225H25.7012C25.7012 44.0525 25.6928 44.3965 25.676 44.7545C25.6592 45.1125 25.6285 45.4565 25.5837 45.7866C25.4941 46.5641 25.3374 47.2773 25.1134 47.9261C24.8951 48.5806 24.6264 49.1707 24.3073 49.6965C23.9938 50.2223 23.6411 50.6838 23.2493 51.081C22.8574 51.4837 22.4431 51.8193 22.0065 52.0878C21.5754 52.3563 21.1304 52.5577 20.6714 52.6919C20.2179 52.8318 19.7729 52.9017 19.3362 52.9017C18.7148 52.9017 18.1606 52.7786 17.6736 52.5325C17.1921 52.292 16.7863 51.9592 16.456 51.534C16.1257 51.1089 15.8738 50.6083 15.7003 50.0321C15.5267 49.456 15.4399 48.8351 15.4399 48.1695C15.4399 48.0128 15.4455 47.8171 15.4567 47.5821C15.4679 47.3528 15.4987 47.0955 15.5491 46.8102C15.5995 46.5305 15.6723 46.2285 15.7674 45.904C15.8626 45.5796 15.997 45.2468 16.1705 44.9056C16.344 44.5588 16.5596 44.2091 16.8171 43.8567C17.0746 43.5043 17.3881 43.1575 17.7575 42.8163C18.267 42.3521 18.7932 41.9605 19.3362 41.6417C19.8792 41.3172 20.4138 41.0459 20.9401 40.8278C21.4663 40.6096 21.9729 40.4334 22.4599 40.2992C22.947 40.1593 23.3948 40.0419 23.8035 39.9468C23.8539 39.9468 23.9042 39.9552 23.9546 39.9719C24.0106 39.9887 24.0386 40.0139 24.0386 40.0475C24.0386 40.0754 24.0246 40.1062 23.9966 40.1398C23.9742 40.1733 23.9378 40.1985 23.8875 40.2153C23.2661 40.411 22.6951 40.6068 22.1744 40.8026C21.6594 40.9984 21.1864 41.1998 20.7553 41.4067C20.3299 41.6137 19.938 41.829 19.5797 42.0528C19.227 42.2709 18.9052 42.5031 18.6141 42.7492C18.1998 43.096 17.8499 43.4568 17.5644 43.8316C17.2789 44.2008 17.0438 44.5727 16.8591 44.9475C16.6799 45.3223 16.5484 45.6943 16.4644 46.0634C16.386 46.4326 16.3468 46.7878 16.3468 47.129C16.3468 47.7052 16.428 48.1974 16.5903 48.6058C16.7527 49.0197 16.971 49.3581 17.2453 49.621C17.5196 49.8895 17.8387 50.0853 18.2026 50.2083C18.5665 50.337 18.9499 50.4013 19.353 50.4013C19.8848 50.4013 20.3942 50.3006 20.8813 50.0993C21.3739 49.9035 21.833 49.6378 22.2584 49.3022C22.6839 48.9666 23.0701 48.5778 23.4172 48.1359C23.7699 47.694 24.0694 47.2325 24.3157 46.7515C24.562 46.2704 24.7524 45.7838 24.8867 45.2915C25.0267 44.7937 25.0966 44.321 25.0966 43.8735C25.0966 43.5771 25.0575 43.2219 24.9791 42.8079C24.9063 42.3884 24.8139 41.9381 24.702 41.4571C24.59 40.976 24.4697 40.4782 24.3409 39.9636C24.2121 39.4489 24.0918 38.9483 23.9798 38.4617C23.8679 37.9694 23.7727 37.5051 23.6943 37.0688C23.6215 36.6325 23.5852 36.2494 23.5852 35.9193C23.5852 35.6341 23.6467 35.2928 23.7699 34.8957C23.8986 34.4985 24.1058 34.0343 24.3913 33.5029L24.4752 33.5532C24.4641 33.6036 24.4585 33.6623 24.4585 33.7294C24.4585 33.7965 24.4585 33.8609 24.4585 33.9224C24.4585 34.2636 24.492 34.6636 24.5592 35.1222C24.6264 35.5809 24.7188 36.0844 24.8363 36.6325C24.9539 37.1751 25.0882 37.7541 25.2394 38.3694C25.3905 38.9847 25.5501 39.6167 25.718 40.2656C25.886 40.9145 26.0707 41.4738 26.2722 41.9437C26.4794 42.4136 26.6921 42.7828 26.9104 43.0513C27.0616 43.247 27.1679 43.4736 27.2295 43.7309C27.2967 43.9882 27.3303 44.2315 27.3303 44.4609V44.6287Z"
        fill="black"
      />
      <path
        d="M24.6936 37.6751C24.8615 37.8709 24.9931 38.0554 25.0882 38.2289C25.1834 38.3967 25.2478 38.5533 25.2814 38.6987C25.2982 38.7714 25.3262 38.8889 25.3653 39.0511C25.4045 39.2133 25.4521 39.4007 25.5081 39.6133C25.5641 39.8258 25.6257 40.0552 25.6928 40.3013C25.76 40.5474 25.83 40.7907 25.9028 41.0313C26.0427 41.5123 26.1967 41.9207 26.3646 42.2563C26.5325 42.5975 26.7229 42.8716 26.9356 43.0786C27.1483 43.2911 27.3891 43.4449 27.6578 43.54C27.9321 43.6351 28.2428 43.6827 28.5898 43.6827C28.8026 43.6827 29.0265 43.6351 29.2616 43.54C29.5023 43.4449 29.7374 43.3135 29.967 43.1457C30.2021 42.9779 30.426 42.7737 30.6387 42.5332C30.8515 42.2982 31.0418 42.0381 31.2097 41.7529C31.3329 41.5515 31.4533 41.3193 31.5708 41.0564C31.6828 40.788 31.7947 40.5334 31.9067 40.2929C32.0243 40.0524 32.1418 39.851 32.2594 39.6888C32.3825 39.521 32.5085 39.4371 32.6373 39.4371C32.7268 39.4371 32.8108 39.4706 32.8892 39.5378C32.9731 39.5993 33.0739 39.686 33.1915 39.7979C33.309 39.9153 33.4546 40.0524 33.6281 40.209C33.8017 40.3656 34.02 40.539 34.2831 40.7292C34.6694 40.9977 34.9437 41.2606 35.106 41.5179C35.274 41.7808 35.3579 42.0381 35.3579 42.2898V42.508C35.2236 42.6031 35.0808 42.6674 34.9297 42.701C34.7841 42.7401 34.6358 42.7597 34.4846 42.7597C34.3055 42.7597 34.1347 42.7234 33.9724 42.6506C33.8101 42.5779 33.6533 42.4968 33.5022 42.4073C33.3454 42.3178 33.1915 42.2367 33.0403 42.164C32.8948 42.0913 32.7492 42.0549 32.6037 42.0549C32.5029 42.0549 32.4133 42.1053 32.335 42.2059C32.2566 42.3122 32.1782 42.4493 32.0998 42.6171C32.0215 42.7905 31.9403 42.9891 31.8563 43.2128C31.7668 43.431 31.6632 43.6575 31.5456 43.8924C31.4337 44.1274 31.2993 44.3595 31.1426 44.5888C30.9858 44.8238 30.8011 45.0363 30.5884 45.2265C30.2581 45.523 29.9138 45.7383 29.5555 45.8726C29.1972 46.0124 28.8194 46.0824 28.4219 46.0824C28.0748 46.0824 27.7417 46.0152 27.4226 45.881C27.1035 45.7467 26.8041 45.5454 26.5241 45.2769C26.2498 45.0084 25.9951 44.6672 25.76 44.2532C25.5305 43.8449 25.3318 43.3638 25.1638 42.8101C25.0519 42.4297 24.9483 42.0437 24.8531 41.6522C24.758 41.2662 24.6768 40.9054 24.6096 40.5698C24.5424 40.2342 24.4892 39.9405 24.4501 39.6888C24.4109 39.4371 24.3913 39.2581 24.3913 39.1518C24.3913 38.8889 24.4081 38.6316 24.4417 38.3799C24.4752 38.1282 24.5256 37.8932 24.5928 37.6751H24.6936Z"
        fill="black"
      />
      <path
        d="M42.1596 37.5482C42.2772 37.5762 42.3947 37.593 42.5123 37.5986C42.6298 37.5986 42.7474 37.5986 42.865 37.5986C43.2008 37.5986 43.5507 37.5426 43.9146 37.4307C44.2841 37.3133 44.6563 37.1455 45.0314 36.9273C45.4065 36.7036 45.776 36.4295 46.1398 36.105C46.5093 35.7806 46.862 35.4058 47.1979 34.9807C47.2762 34.8744 47.349 34.7654 47.4162 34.6535C47.4834 34.5416 47.5394 34.4353 47.5841 34.3347C47.6345 34.2284 47.6709 34.1333 47.6933 34.0494C47.7213 33.9599 47.7353 33.8844 47.7353 33.8228C47.7353 33.6886 47.7045 33.5487 47.6429 33.4033C47.5869 33.2579 47.4974 33.1264 47.3742 33.009C47.2567 32.8915 47.1055 32.7936 46.9208 32.7153C46.736 32.637 46.5205 32.5978 46.2742 32.5978C45.8207 32.5978 45.3953 32.7125 44.9978 32.9418C44.606 33.1656 44.2393 33.4872 43.8978 33.9067C43.5563 34.3263 43.2372 34.8381 42.9405 35.4422C42.6494 36.0463 42.3779 36.7259 42.126 37.4811L42.1596 37.5482ZM33.0907 39.6123C33.3706 39.9087 33.6701 40.1353 33.9892 40.2919C34.3027 40.4429 34.6358 40.5184 34.9885 40.5184C35.3523 40.5184 35.733 40.4206 36.1305 40.2248C36.5279 40.029 36.9422 39.7074 37.3732 39.2599C37.5804 39.0473 37.7623 38.8264 37.919 38.597C38.0758 38.3677 38.2129 38.1439 38.3305 37.9258C38.4537 37.702 38.5628 37.4895 38.658 37.2881C38.7476 37.0867 38.8343 36.9133 38.9183 36.7679C39.0079 36.6169 39.0946 36.4966 39.1786 36.4071C39.2682 36.3176 39.3662 36.2729 39.4725 36.2729C39.5845 36.2729 39.7048 36.3316 39.8336 36.4491C39.9623 36.5665 40.1023 36.6952 40.2534 36.835C40.399 36.9805 40.5557 37.1175 40.7237 37.2462C40.8916 37.3692 41.0736 37.4419 41.2695 37.4643L41.3367 37.4307C41.583 36.4574 41.8797 35.5569 42.2268 34.729C42.5739 33.8956 42.9601 33.174 43.3856 32.5643C43.8166 31.9546 44.2841 31.4791 44.7879 31.1379C45.2973 30.7911 45.8375 30.6177 46.4085 30.6177C46.6884 30.6177 46.946 30.6652 47.1811 30.7603C47.4218 30.8498 47.6261 30.9841 47.7941 31.163C47.9676 31.3365 48.102 31.549 48.1971 31.8007C48.2923 32.0524 48.3399 32.3405 48.3399 32.6649C48.3399 32.9167 48.3231 33.1544 48.2895 33.3781C48.2503 33.6075 48.2167 33.8284 48.1887 34.041C48.1439 34.371 48.0936 34.6703 48.0376 34.9388C47.9816 35.2017 47.9228 35.4394 47.8612 35.652C47.7997 35.8645 47.7353 36.0575 47.6681 36.2309C47.6009 36.3987 47.5338 36.5525 47.4666 36.6924C47.2371 37.1063 46.9823 37.4727 46.7024 37.7915C46.4225 38.1104 46.1314 38.3901 45.8291 38.6306C45.5324 38.8711 45.2273 39.0753 44.9139 39.2431C44.606 39.4109 44.3065 39.5479 44.0154 39.6542C43.7299 39.7549 43.4612 39.8304 43.2092 39.8808C42.9573 39.9255 42.7362 39.9479 42.5459 39.9479C42.2156 39.9479 41.9273 39.9199 41.681 39.864C41.4402 39.8081 41.2275 39.7381 41.0428 39.6542C40.858 39.5703 40.6957 39.4808 40.5557 39.3857C40.4214 39.2906 40.2982 39.2011 40.1863 39.1172C40.0743 39.0333 39.9651 38.9634 39.8588 38.9075C39.7524 38.8515 39.6405 38.8236 39.5229 38.8236C39.4053 38.8236 39.3018 38.8683 39.2122 38.9578C39.1226 39.0473 39.0359 39.1676 38.9519 39.3186C38.8735 39.464 38.7896 39.6319 38.7 39.822C38.6104 40.0178 38.5096 40.222 38.3977 40.4345C38.2913 40.6415 38.1682 40.8513 38.0282 41.0638C37.8883 41.2764 37.7203 41.475 37.5244 41.6596C37.1381 42.0287 36.7351 42.2972 36.3152 42.465C35.9009 42.6329 35.4475 42.7168 34.9549 42.7168C34.6246 42.7168 34.3167 42.658 34.0312 42.5406C33.7457 42.4231 33.4994 42.2721 33.2922 42.0875C33.0795 41.9085 32.9144 41.7099 32.7968 41.4917C32.6792 41.2736 32.6205 41.061 32.6205 40.8541C32.6205 40.7086 32.6513 40.5352 32.7128 40.3339C32.7744 40.1325 32.8724 39.892 33.0067 39.6123H33.0907Z"
        fill="black"
      />
      <path
        d="M50.2712 33.3015C50.3888 32.9659 50.5091 32.6247 50.6323 32.2779C50.7499 31.9311 50.8814 31.5675 51.027 31.1871H51.0941C51.5252 32.1604 51.8919 33.1449 52.1942 34.1406C52.5021 35.1362 52.7568 36.1543 52.9583 37.1947C53.1542 38.2351 53.3726 39.2112 53.6133 40.123C53.8596 41.0291 54.1171 41.8318 54.3858 42.531L54.2179 43.2358C54.0891 43.2358 53.9492 43.1883 53.798 43.0932C53.6469 42.9925 53.4873 42.8079 53.3194 42.5394C53.1514 42.2653 52.9807 41.8906 52.8072 41.4151C52.6392 40.9341 52.4769 40.3104 52.3201 39.544C52.1354 38.6658 51.8723 37.7093 51.5308 36.6745C51.1893 35.6397 50.7695 34.5153 50.2712 33.3015Z"
        fill="black"
      />
      <path
        d="M52.5049 37.2168C52.6728 37.4126 52.8044 37.5972 52.8995 37.7706C52.9947 37.9384 53.0591 38.0951 53.0927 38.2405C53.1094 38.3132 53.1374 38.4307 53.1766 38.5929C53.2158 38.7551 53.2634 38.9425 53.3194 39.155C53.3754 39.3676 53.4369 39.5969 53.5041 39.8431C53.5713 40.0892 53.6413 40.3325 53.714 40.573C53.854 41.0541 54.0079 41.4624 54.1759 41.7981C54.3438 42.1393 54.5342 42.4134 54.7469 42.6203C54.9596 42.8329 55.2003 42.9867 55.469 43.0818C55.7433 43.1769 56.054 43.2244 56.4011 43.2244C56.6138 43.2244 56.8378 43.1769 57.0729 43.0818C57.3136 42.9867 57.5487 42.8553 57.7783 42.6874C58.0134 42.5196 58.2373 42.3155 58.45 42.0749C58.6628 41.84 58.8531 41.5799 59.021 41.2946C59.1442 41.0933 59.2645 40.8611 59.3821 40.5982C59.4941 40.3297 59.606 40.0752 59.718 39.8347C59.8355 39.5942 59.9531 39.3928 60.0707 39.2306C60.1938 39.0628 60.3198 38.9788 60.4485 38.9788C60.5381 38.9788 60.6221 39.0124 60.7005 39.0795C60.7844 39.1411 60.8852 39.2278 61.0028 39.3396C61.1203 39.4571 61.2659 39.5942 61.4394 39.7508C61.6129 39.9074 61.8313 40.0808 62.0944 40.271C62.4806 40.5395 62.7549 40.8024 62.9173 41.0597C63.0852 41.3226 63.1692 41.5799 63.1692 41.8316V42.0498C63.0349 42.1449 62.8921 42.2092 62.741 42.2428C62.5954 42.2819 62.4471 42.3015 62.2959 42.3015C62.1168 42.3015 61.946 42.2651 61.7837 42.1924C61.6213 42.1197 61.4646 42.0386 61.3134 41.9491C61.1567 41.8596 61.0027 41.7785 60.8516 41.7058C60.7061 41.633 60.5605 41.5967 60.4149 41.5967C60.3142 41.5967 60.2246 41.647 60.1462 41.7477C60.0679 41.854 59.9895 41.991 59.9111 42.1588C59.8327 42.3322 59.7516 42.5308 59.6676 42.7546C59.578 42.9727 59.4745 43.1993 59.3569 43.4342C59.2449 43.6691 59.1106 43.9013 58.9538 44.1306C58.7971 44.3655 58.6124 44.5781 58.3996 44.7683C58.0694 45.0648 57.7251 45.2801 57.3668 45.4144C57.0085 45.5542 56.6306 45.6241 56.2332 45.6241C55.8861 45.6241 55.553 45.557 55.2339 45.4227C54.9148 45.2885 54.6153 45.0871 54.3354 44.8186C54.0611 44.5501 53.8064 44.2089 53.5713 43.795C53.3418 43.3867 53.143 42.9056 52.9751 42.3518C52.8631 41.9715 52.7596 41.5855 52.6644 41.1939C52.5692 40.808 52.4881 40.4472 52.4209 40.1116C52.3537 39.7759 52.3005 39.4823 52.2613 39.2306C52.2222 38.9788 52.2026 38.7999 52.2026 38.6936C52.2026 38.4307 52.2194 38.1734 52.2529 37.9216C52.2865 37.6699 52.3369 37.435 52.4041 37.2168H52.5049Z"
        fill="black"
      />
      <path
        d="M62.5646 40.158C62.9173 40.158 63.2728 40.0769 63.6311 39.9147C63.9949 39.7525 64.3616 39.4868 64.7311 39.1176C65.0837 38.7652 65.3609 38.4072 65.5624 38.0436C65.7695 37.6744 65.8731 37.3052 65.8731 36.936C65.8731 36.6787 65.8171 36.3963 65.7051 36.0886C65.5932 35.7754 65.4532 35.4397 65.2853 35.0817C65.1173 34.7238 64.9354 34.3406 64.7395 33.9322C64.5435 33.5295 64.3616 33.1044 64.1937 32.6569C64.0257 32.2038 63.8858 31.7311 63.7738 31.2389C63.6618 30.7467 63.6059 30.2348 63.6059 29.7034C63.6059 29.2112 63.6534 28.7022 63.7486 28.1764C63.8494 27.6506 64.0257 27.0968 64.2776 26.5151C64.3784 26.2857 64.4959 26.1011 64.6303 25.9613C64.7703 25.8158 64.9214 25.7431 65.0837 25.7431L65.1341 25.7935C65.1341 26.006 65.0782 26.241 64.9662 26.4983C64.8598 26.75 64.7423 27.0017 64.6135 27.2534C64.5351 27.4044 64.4764 27.5723 64.4372 27.7568C64.398 27.9414 64.3784 28.1484 64.3784 28.3777C64.3784 28.8196 64.4344 29.2531 64.5463 29.6783C64.6639 30.0978 64.8066 30.5117 64.9746 30.9201C65.1481 31.3228 65.3357 31.72 65.5372 32.1115C65.7387 32.5087 65.9235 32.903 66.0914 33.2946C66.2649 33.6861 66.4077 34.0777 66.5197 34.4692C66.6372 34.8608 66.696 35.2524 66.696 35.6439C66.696 35.7782 66.6904 35.9124 66.6792 36.0467C66.668 36.1753 66.6512 36.3124 66.6288 36.4578C66.612 36.5976 66.5924 36.7487 66.57 36.9109C66.5421 37.0731 66.5169 37.2549 66.4945 37.4563C66.4105 38.0492 66.2985 38.5666 66.1586 39.0085C66.0242 39.4504 65.8675 39.8447 65.6883 40.1916C65.526 40.5104 65.3245 40.8013 65.0837 41.0642C64.843 41.3271 64.5827 41.5536 64.3028 41.7438C64.0229 41.934 63.729 42.0794 63.4211 42.1801C63.1188 42.2864 62.8221 42.3395 62.531 42.3395C62.2959 42.3395 62.0552 42.2864 61.8089 42.1801C61.557 42.0794 61.3302 41.9424 61.1287 41.769C60.9272 41.6012 60.762 41.4054 60.6333 41.1816C60.4989 40.9635 60.4317 40.7397 60.4317 40.5104C60.4317 40.365 60.4625 40.1916 60.5241 39.9902C60.5857 39.7888 60.6837 39.5483 60.818 39.2686H60.902C61.2379 39.6042 61.543 39.8364 61.8173 39.965C62.086 40.0937 62.3351 40.158 62.5646 40.158Z"
        fill="black"
      />
      <path
        d="M69.635 39.346C69.6182 39.3908 69.5958 39.4355 69.5678 39.4803C69.5398 39.525 69.5118 39.5474 69.4838 39.5474C69.4671 39.5474 69.4559 39.525 69.4503 39.4803C69.4503 39.4355 69.4503 39.3908 69.4503 39.346C69.4503 39.2453 69.4754 39.016 69.5258 38.658C69.5762 38.3 69.6014 37.8245 69.6014 37.2316C69.6014 36.2136 69.5622 35.2431 69.4838 34.3201C69.4111 33.3916 69.3019 32.5301 69.1564 31.7358C69.0108 30.9359 68.8289 30.2116 68.6105 29.5627C68.3922 28.9138 68.1375 28.3629 67.8464 27.9098C67.5553 27.4511 67.2306 27.0987 66.8723 26.8526C66.5085 26.6009 66.1138 26.475 65.6883 26.475C65.4588 26.475 65.2545 26.5365 65.0754 26.6596C64.8962 26.7771 64.7479 26.9505 64.6303 27.1798C64.5183 27.3924 64.4232 27.5602 64.3448 27.6832C64.2608 27.8063 64.1769 27.9182 64.0929 28.0189L64.0257 28.0021V27.8007C64.0257 27.6553 64.0425 27.4623 64.0761 27.2218C64.1041 26.9812 64.1769 26.7211 64.2944 26.4414C64.4232 26.1394 64.5715 25.8737 64.7395 25.6443C64.9018 25.415 65.0754 25.222 65.2601 25.0654C65.4392 24.9088 65.624 24.7913 65.8143 24.713C65.999 24.6347 66.181 24.5955 66.3601 24.5955C66.7912 24.5955 67.1942 24.7298 67.5693 24.9983C67.9444 25.2612 68.2859 25.6332 68.5938 26.1142C68.9016 26.5897 69.1732 27.1574 69.4083 27.8175C69.649 28.4719 69.8505 29.1935 70.0129 29.9822C70.1752 30.7653 70.2984 31.5988 70.3823 32.4826C70.4663 33.3608 70.5083 34.2614 70.5083 35.1843C70.5083 35.9227 70.4859 36.4988 70.4411 36.9128C70.4019 37.3267 70.3404 37.6344 70.2564 37.8357C70.1612 38.0874 70.0577 38.3475 69.9457 38.616C69.8393 38.8845 69.7358 39.1279 69.635 39.346Z"
        fill="black"
      />
      <path
        d="M48.8518 31.3103C48.8518 31.2935 48.8658 31.2403 48.8938 31.1509C48.9162 31.0669 48.9497 30.9719 48.9945 30.8656C49.0337 30.7537 49.0785 30.6474 49.1289 30.5467C49.1793 30.4405 49.2269 30.3593 49.2716 30.3034V30.2866C49.0029 30.2195 48.7846 30.1104 48.6167 29.9594C48.4487 29.8028 48.3647 29.6154 48.3647 29.3972C48.3647 29.3301 48.3759 29.2378 48.3983 29.1204C48.4151 29.0029 48.4543 28.8547 48.5159 28.6757C48.5551 28.5414 48.6111 28.4155 48.6838 28.2981C48.751 28.1806 48.8378 28.0799 48.9441 27.996C49.0449 27.9121 49.1681 27.845 49.3136 27.7947C49.4536 27.7443 49.6187 27.7191 49.8091 27.7191C50.1225 27.7191 50.3633 27.7695 50.5312 27.8702C50.6991 27.9653 50.7831 28.0883 50.7831 28.2393C50.7831 28.3568 50.7607 28.4715 50.7159 28.5834C50.6656 28.7008 50.6152 28.8267 50.5648 28.9609C50.548 28.9945 50.5256 29.0113 50.4976 29.0113C50.4528 29.0113 50.4248 28.9833 50.4136 28.9274C50.4024 28.7931 50.3325 28.6896 50.2037 28.6169C50.075 28.5442 49.8706 28.5078 49.5907 28.5078C49.3444 28.5078 49.1569 28.5498 49.0281 28.6337C48.8994 28.712 48.835 28.7931 48.835 28.877C48.835 28.9889 48.8798 29.0896 48.9693 29.1791C49.0533 29.263 49.1569 29.3385 49.28 29.4056C49.3976 29.4672 49.5179 29.5147 49.6411 29.5483C49.7643 29.5818 49.865 29.5986 49.9434 29.5986C50.0834 29.5986 50.2345 29.5762 50.3969 29.5315C50.5648 29.4867 50.7327 29.4308 50.9007 29.3637C51.0742 29.291 51.245 29.2154 51.4129 29.1371C51.5864 29.0532 51.746 28.9721 51.8915 28.8938C51.9251 28.877 51.9503 28.8686 51.9671 28.8686C52.0007 28.8686 52.0175 28.8854 52.0175 28.919C52.0175 28.9414 52.0035 28.9665 51.9755 28.9945C51.858 29.112 51.774 29.2294 51.7236 29.3469C51.6676 29.4644 51.6228 29.5539 51.5892 29.6154C51.5333 29.7273 51.4465 29.8252 51.3289 29.9091C51.217 29.9874 51.0826 30.0629 50.9259 30.1356C50.7747 30.2083 50.6124 30.2782 50.4388 30.3454C50.2653 30.4181 50.0974 30.4992 49.935 30.5887C49.7671 30.6726 49.6103 30.7733 49.4648 30.8907C49.3192 31.0026 49.1989 31.1369 49.1037 31.2935C49.0757 31.3271 49.0505 31.3578 49.0281 31.3858C49.0001 31.4138 48.9693 31.4277 48.9357 31.4277C48.8798 31.4277 48.8518 31.3886 48.8518 31.3103Z"
        fill="#31C0CC"
      />
      <path
        d="M33.3928 48.9846C33.3648 49.1356 33.3172 49.3062 33.25 49.4964C33.1772 49.6922 33.1017 49.8768 33.0233 50.0502C32.9449 50.2236 32.8721 50.369 32.805 50.4865C32.7378 50.6039 32.693 50.6627 32.6706 50.6627C32.5978 50.6627 32.5055 50.6375 32.3935 50.5871C32.2759 50.5424 32.15 50.4809 32.0156 50.4026C31.8757 50.3298 31.7357 50.2459 31.5958 50.1508C31.4558 50.0558 31.3271 49.9579 31.2095 49.8572C31.0863 49.7621 30.9828 49.667 30.8988 49.5719C30.8148 49.4824 30.7617 49.4041 30.7393 49.337C30.7393 49.3034 30.7728 49.2055 30.84 49.0433C30.9016 48.8811 30.9744 48.7049 31.0583 48.5147C31.1423 48.3245 31.2291 48.1483 31.3187 47.9861C31.4082 47.8239 31.4782 47.726 31.5286 47.6924C31.6182 47.7931 31.7357 47.905 31.8813 48.028C32.0268 48.1567 32.1864 48.2798 32.3599 48.3972C32.5334 48.5203 32.7098 48.635 32.8889 48.7412C33.0681 48.8475 33.236 48.9286 33.3928 48.9846ZM34.2661 47.1722C34.4956 47.4575 34.7783 47.712 35.1142 47.9358C35.4556 48.1595 35.7999 48.3357 36.147 48.4644C36.0294 48.772 35.9231 49.0293 35.8279 49.2363C35.7383 49.4432 35.66 49.6083 35.5928 49.7313C35.5256 49.86 35.4696 49.9523 35.4249 50.0082C35.3857 50.0641 35.3577 50.0921 35.3409 50.0921C35.2961 50.0921 35.2261 50.0725 35.131 50.0334C35.0358 49.9998 34.9266 49.9495 34.8035 49.8823C34.6803 49.8152 34.5488 49.7369 34.4088 49.6474C34.2744 49.5635 34.1457 49.4712 34.0225 49.3705C33.8994 49.2754 33.7902 49.1748 33.695 49.0685C33.5999 48.9622 33.5327 48.8559 33.4935 48.7496C33.4935 48.7105 33.5187 48.621 33.5691 48.4811C33.6251 48.3469 33.6894 48.1959 33.7622 48.028C33.8406 47.8602 33.9246 47.6952 34.0141 47.533C34.1037 47.3764 34.1877 47.2561 34.2661 47.1722Z"
        fill="#31C0CC"
      />
      <path
        d="M59.0207 35.0496C58.9927 35.2007 58.9451 35.3741 58.8779 35.5699C58.8052 35.76 58.7296 35.9418 58.6512 36.1152C58.5728 36.2886 58.5001 36.4341 58.4329 36.5515C58.3657 36.669 58.3209 36.7277 58.2985 36.7277C58.2258 36.7277 58.1334 36.7054 58.0214 36.6606C57.9039 36.6103 57.7779 36.5487 57.6436 36.476C57.5036 36.3977 57.3636 36.311 57.2237 36.2159C57.0837 36.1208 56.955 36.0257 56.8374 35.9306C56.7143 35.83 56.6107 35.7349 56.5267 35.6454C56.4428 35.5503 56.3896 35.4692 56.3672 35.402C56.3672 35.3685 56.4008 35.2706 56.468 35.1084C56.5295 34.9462 56.6023 34.77 56.6863 34.5798C56.7702 34.3896 56.857 34.2134 56.9466 34.0512C57.0362 33.889 57.1061 33.7911 57.1565 33.7575C57.2461 33.8582 57.3636 33.9729 57.5092 34.1015C57.6547 34.2246 57.8143 34.3476 57.9878 34.4707C58.1614 34.5882 58.3377 34.7 58.5169 34.8063C58.696 34.9126 58.8639 34.9937 59.0207 35.0496ZM59.894 33.2373C60.1235 33.5226 60.4062 33.7771 60.7421 34.0008C61.0836 34.2246 61.4279 34.4008 61.7749 34.5294C61.6574 34.8371 61.551 35.0944 61.4558 35.3014C61.3663 35.5083 61.2879 35.6761 61.2207 35.8048C61.1536 35.9278 61.0976 36.0173 61.0528 36.0733C61.0136 36.1292 60.9856 36.1572 60.9688 36.1572C60.924 36.1572 60.8541 36.1404 60.7589 36.1068C60.6637 36.0677 60.5546 36.0145 60.4314 35.9474C60.3082 35.8803 60.1767 35.8048 60.0367 35.7209C59.9024 35.6314 59.7736 35.5391 59.6505 35.444C59.5273 35.3433 59.4181 35.2398 59.323 35.1335C59.2278 35.0217 59.1606 34.9154 59.1214 34.8147C59.1214 34.7756 59.1466 34.6889 59.197 34.5546C59.253 34.4148 59.3174 34.2609 59.3902 34.0931C59.4685 33.9253 59.5525 33.7631 59.6421 33.6065C59.7316 33.4443 59.8156 33.3212 59.894 33.2373Z"
        fill="#31C0CC"
      />
      <path
        d="M41.3233 57.8596L40.8086 57.628C41.512 55.8953 42.3183 54.5314 43.2275 53.5364C44.1367 52.5414 45.166 52.0439 46.3154 52.0439C46.71 52.0439 47.1475 52.0868 47.6278 52.1726C48.1253 52.2584 48.5456 52.3013 48.8887 52.3013C49.4548 52.3013 49.7379 52.5757 49.7379 53.1247C49.7379 53.6908 49.6007 54.2227 49.3262 54.7202C49.0517 55.2177 48.6829 55.6122 48.2197 55.9039C47.7736 56.2127 47.2761 56.3671 46.7272 56.3671C46.3497 56.3671 45.938 56.2899 45.492 56.1355C45.0631 55.9982 44.6514 55.9296 44.2568 55.9296C43.6221 55.9296 43.0902 56.0926 42.6614 56.4185C42.2496 56.7445 41.8036 57.2248 41.3233 57.8596Z"
        fill="black"
      />
      <path
        d="M46.7392 56.3756C46.1731 56.3756 45.89 56.1012 45.89 55.5522C45.89 55.0375 46.0187 54.5314 46.276 54.0339C46.5334 53.5364 46.8936 53.1247 47.3568 52.7988C47.82 52.4728 48.369 52.3098 49.0037 52.3098C49.4154 52.3098 49.7929 52.267 50.136 52.1812C50.4962 52.0954 50.8393 51.9753 51.1653 51.8209C50.8908 51.2376 50.5992 50.8002 50.2904 50.5085C49.9816 50.1997 49.5784 50.0453 49.0809 50.0453C49.0123 50.0453 48.9437 50.0453 48.875 50.0453C48.8236 50.0453 48.7721 50.0539 48.7206 50.0711L48.5663 49.8138C48.9437 49.0075 49.5012 48.407 50.2389 48.0125C50.9937 47.6179 51.7743 47.4206 52.5806 47.4206C53.0609 47.4206 53.5155 47.4892 53.9444 47.6265C54.3733 47.7637 54.725 47.9781 54.9995 48.2698C55.2911 48.5443 55.4369 48.9045 55.4369 49.3506C55.4369 49.7451 55.3254 50.1311 55.1024 50.5085C54.8965 50.8688 54.5449 51.2805 54.0474 51.7437C54.2018 51.7952 54.4162 51.8209 54.6907 51.8209C54.8794 51.8209 55.0252 51.9067 55.1281 52.0782C55.2311 52.2326 55.2825 52.4128 55.2825 52.6186C55.2825 53.1504 55.1624 53.5193 54.9223 53.7251C54.6993 53.931 54.3647 54.0339 53.9187 54.0339C53.3183 54.0339 52.795 53.8624 52.349 53.5193L52.2975 53.4936C51.6628 54.0768 51.0709 54.5915 50.5219 55.0375C49.9901 55.4664 49.424 55.8009 48.8236 56.0411C48.2403 56.2641 47.5455 56.3756 46.7392 56.3756Z"
        fill="black"
      />
      <path
        d="M53.9012 54.0597C53.7811 54.0597 53.6524 53.9996 53.5152 53.8795C53.3608 53.7423 53.2836 53.5364 53.2836 53.262C53.2836 52.7988 53.4294 52.4557 53.7211 52.2326C54.0127 51.9925 54.2958 51.8724 54.5703 51.8724C56.5774 51.8724 58.3273 50.8431 59.8198 48.7844C60.3001 48.1325 60.6861 47.6179 60.9777 47.2405C61.2865 46.863 61.561 46.5886 61.8012 46.417C62.0414 46.2283 62.3073 46.1082 62.5989 46.0568C62.719 45.8337 62.882 45.585 63.0878 45.3105C63.2937 45.0189 63.4996 44.753 63.7054 44.5128C63.9113 44.2555 64.0828 44.0667 64.2201 43.9467H64.5289C64.872 44.7873 65.2151 45.4306 65.5582 45.8766C65.7984 46.1683 65.9613 46.3999 66.0471 46.5714C66.1329 46.743 66.1758 46.9317 66.1758 47.1375C66.1758 47.412 66.0986 47.7294 65.9442 48.0897C65.7898 48.4328 65.5839 48.7673 65.3266 49.0932C65.0693 49.4192 64.7948 49.6937 64.5031 49.9167C64.2115 50.1225 63.9284 50.2255 63.654 50.2255C63.4138 50.2255 63.1908 50.1826 62.9849 50.0968C62.5732 49.9081 62.1958 49.7709 61.8527 49.6851C61.5267 49.5822 61.2351 49.5307 60.9777 49.5307C60.8062 49.5307 60.5403 49.6937 60.18 50.0196C59.8198 50.3284 59.348 50.783 58.7647 51.3835C57.907 52.2755 57.1092 52.9446 56.3716 53.3906C55.651 53.8367 54.8276 54.0597 53.9012 54.0597Z"
        fill="black"
      />
      <path
        d="M74.7674 55.5179C73.4979 55.5179 72.5629 55.0375 71.9625 54.0768C71.3792 53.099 71.0875 51.6665 71.0875 49.7794C71.0875 48.3556 71.1133 46.966 71.1647 45.6107C71.2334 44.2555 71.3106 43.0117 71.3963 41.8794C71.4821 40.73 71.5765 39.7436 71.6794 38.9202C71.7823 38.0796 71.8767 37.4705 71.9625 37.0931C72.1683 36.2354 72.4771 35.3004 72.8889 34.2882L73.4292 34.4426C73.2405 35.6092 73.0947 37.1017 72.9918 38.9202C72.8888 40.7386 72.8374 42.8745 72.8374 45.3277C72.8374 45.9796 72.8545 46.6658 72.8889 47.3863C72.9403 48.0897 73.0604 48.7501 73.2491 49.3677C73.455 49.9853 73.7723 50.4914 74.2012 50.886C74.6473 51.2634 75.2563 51.4521 76.0283 51.4521C76.7659 51.4521 77.1348 51.941 77.1348 52.9189C77.1348 53.5708 77.0061 54.0854 76.7488 54.4628C76.4915 54.8402 76.1741 55.1147 75.7967 55.2863C75.4364 55.4407 75.0933 55.5179 74.7674 55.5179Z"
        fill="black"
      />
      <path
        d="M74.7338 55.5179C74.0133 55.5179 73.653 55.0289 73.653 54.0511C73.653 53.5193 73.7388 53.099 73.9103 52.7902C74.0647 52.4642 74.2449 52.2155 74.4507 52.0439C74.6394 51.8724 74.7852 51.7695 74.8882 51.7351C74.9053 51.495 74.974 51.1347 75.094 50.6544C75.2313 50.174 75.4286 49.625 75.6859 49.0075C75.9432 48.3899 76.252 47.7723 76.6123 47.1547C77.1269 46.2969 77.6502 45.6879 78.182 45.3277C78.7138 44.9502 79.3485 44.7615 80.0862 44.7615C81.0126 44.7615 82.102 44.9931 83.3543 45.4563C83.9547 45.6793 84.4694 45.8595 84.8983 45.9967C85.3271 46.1168 85.6531 46.2112 85.8761 46.2798L85.9533 46.5886C84.8211 48.3384 83.706 49.891 82.608 51.2462C81.5101 52.5843 80.3264 53.6308 79.0569 54.3856C77.8046 55.1405 76.3635 55.5179 74.7338 55.5179ZM75.8146 51.4521H76.0204C77.0326 51.4521 78.019 51.3406 78.9797 51.1176C79.9404 50.8774 80.8153 50.5257 81.6045 50.0625C82.4107 49.5822 83.0541 48.9989 83.5344 48.3127C82.7453 48.021 82.0162 47.798 81.3471 47.6436C80.6952 47.4721 80.1119 47.3863 79.5973 47.3863C78.8253 47.3863 78.182 47.5921 77.6673 48.0039C77.1527 48.4156 76.7495 48.9303 76.4579 49.5478C76.1662 50.1654 75.9518 50.8002 75.8146 51.4521Z"
        fill="black"
      />
      <path
        d="M77.5333 61.8825C77.173 61.505 76.8128 61.1534 76.4525 60.8274C76.0923 60.5186 75.7406 60.227 75.3975 59.9525V59.7466C75.5519 59.5236 75.7835 59.232 76.0922 58.8717C76.3839 58.5286 76.6841 58.1941 76.9929 57.8681C77.2845 57.5593 77.499 57.3621 77.6362 57.2763H77.8678C78.5369 57.7052 79.0344 58.0826 79.3603 58.4085C79.7034 58.7516 79.875 59.0947 79.875 59.4378C79.875 60.0554 79.163 60.8703 77.7392 61.8825H77.5333Z"
        fill="black"
      />
      <path
        d="M41.1642 48.9817C40.7867 48.6043 40.4265 48.2612 40.0834 47.9524C39.7231 47.6436 39.3714 47.352 39.0283 47.0775V46.8459C39.1999 46.6057 39.44 46.3141 39.7488 45.971C40.0405 45.6107 40.3321 45.2762 40.6238 44.9674C40.9154 44.6586 41.1298 44.4613 41.2671 44.3755H41.4987C41.9104 44.6329 42.2707 44.8816 42.5795 45.1218C42.8711 45.3448 43.0941 45.5764 43.2485 45.8166C43.4372 45.5764 43.6517 45.3276 43.8918 45.0703C44.132 44.7958 44.3636 44.5557 44.5866 44.3498C44.8096 44.1268 44.9726 43.981 45.0755 43.9123H45.2814C45.9676 44.3412 46.4737 44.7272 46.7997 45.0703C47.1428 45.3963 47.3143 45.7308 47.3143 46.0739C47.3143 46.7258 46.6281 47.5407 45.2557 48.5185H45.0241C44.7324 48.2269 44.4494 47.961 44.1749 47.7208C43.9004 47.4635 43.6431 47.2319 43.4029 47.026C43.1284 47.575 42.4594 48.2269 41.3957 48.9817H41.1642Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.5207 57.6264L14.3554 59.7966L19.9183 60.964C26.2833 62.2995 34.7548 65.5495 38.6677 68.1556L41.3414 69.9373L41.7512 66.414C42.21 62.4693 41.5618 61.4201 37.1204 58.9235C30.8411 55.3942 29.311 55.2669 21.5207 57.6264ZM53.7291 59.285C45.8252 60.452 43.7454 61.8832 43.2052 66.5281L42.8018 69.9956L46.8042 68.6984C52.1612 66.9622 58.8091 66.1181 65.7447 66.2937L71.4595 66.4389L64.9332 62.7443C61.3431 60.7122 58.2443 58.9714 58.0472 58.8751C57.8492 58.7794 55.9064 58.9636 53.7291 59.285ZM5.74431 63.7764C1.44086 64.1366 1.28299 64.2261 0.7793 66.576C0.281618 68.8995 0.349043 68.9947 2.3542 68.8038C3.50617 68.6948 6.95392 68.3561 10.0154 68.0525C20.3303 67.028 33.291 70.1559 42.6881 75.9369C45.0555 77.3937 46.8307 78.2394 46.6328 77.8157C46.014 76.494 36.0441 70.2707 30.9279 68.0127C24.9235 65.3622 12.2561 63.2319 5.74431 63.7764Z"
        fill="#31C0CC"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M86.1688 11.5214C85.2788 13.1519 85.3517 13.7904 86.6311 15.57C87.4665 16.7324 88.4658 17.7597 88.8512 17.8527C89.8237 18.0876 93.8261 15.5643 94.0676 14.5645C94.1764 14.1138 93.5077 14.325 92.5815 15.0342C90.1482 16.8964 87.4067 15.3381 87.3019 12.032L87.2248 9.58594L86.1688 11.5214ZM66.1865 11.6068C63.0625 11.7844 54.432 14.1671 54.2547 14.9011C54.1675 15.2625 54.7824 15.51 55.6213 15.4509C56.5303 15.387 57.0687 15.6656 56.9537 16.1417C56.8478 16.5803 56.4441 16.6193 56.056 16.2271C55.5817 15.7481 55.4058 15.9366 55.5188 16.803C55.7277 18.4118 54.6987 18.2337 53.8573 16.5157C53.3672 15.5154 52.9595 15.36 52.0257 15.8183C51.3649 16.1424 50.8902 16.9126 50.9703 17.5311C51.0689 18.2899 50.808 18.4421 50.1653 17.9989C49.6429 17.6387 48.9764 17.5798 48.6848 17.8685C48.3931 18.1573 48.5158 18.6518 48.9575 18.9678C49.4504 19.32 49.2864 19.4499 48.5323 19.3037C47.0762 19.0225 44.9519 21.1664 45.3828 22.483C45.5637 23.0344 45.4171 23.1355 45.02 22.7343C44.6536 22.3639 43.8687 22.6063 43.2746 23.2719C41.3808 25.3957 41.8857 25.4156 46.0222 23.3799C50.9797 20.9402 57.2874 19.4251 61.2072 19.733C63.9145 19.9459 65.696 18.7804 65.9162 16.6521C65.9459 16.3646 66.401 16.4265 66.9267 16.789C68.1934 17.6618 67.8741 18.7853 66.456 18.4428C65.839 18.2938 65.3701 18.6027 65.4147 19.1287C65.4641 19.7128 67.0042 20.5092 69.3698 21.1743C71.5012 21.7731 74.5202 23.079 76.0794 24.0757C78.1802 25.4185 79.096 25.708 79.6164 25.1925C80.6902 24.1298 79.8133 21.897 77.9356 20.9125C76.935 20.3874 76.3832 19.5372 76.5724 18.8097C76.8717 17.6605 76.9154 17.6718 77.3129 19.0028C77.5456 19.7805 78.3932 20.5761 79.1971 20.7703C80.4183 21.0652 80.6927 20.7611 80.8609 18.9224C80.9881 17.5298 81.3715 16.7961 81.9049 16.9249C82.6358 17.1014 82.4026 18.5854 81.2795 20.8983C80.5059 22.4902 80.7903 23.4048 82.1602 23.7357C82.9677 23.9307 83.9069 24.5798 84.2483 25.1774C85.0902 26.6518 84.8698 28.8895 83.9058 28.6567C83.4758 28.5528 83.3581 28.2364 83.6437 27.9537C84.5855 27.0218 83.0597 24.5926 81.6486 24.7767C79.6773 25.0332 79.5917 26.7966 81.488 28.0952C82.4002 28.7197 84.344 31.2155 85.8077 33.641C87.2716 36.0658 88.7949 37.9433 89.1937 37.8131C89.5919 37.6821 89.7364 38.1392 89.5139 38.8278C89.2918 39.5173 89.4435 41.6702 89.8514 43.6127C90.2587 45.5551 90.5492 47.7693 90.4968 48.5327C90.3917 50.0447 93.4439 45.1498 92.3421 45.2366C87.1631 44.4874 96.7997 48.1601 92.9056 49.1146C88.8641 50.1054 90.4148 51.3295 94.735 50.4914C96.9977 50.0526 89.0777 53.5353 91.5392 53.4932C97.5431 53.391 90.2746 49.3906 90.7975 50.2608C91.3887 51.2428 89.6727 59.2913 88.4881 61.2594C87.5468 62.8228 87.5641 62.8442 88.8722 61.7271C90.9252 59.9747 93.1446 56.0526 93.0153 54.4061C92.921 53.2105 92.9914 53.1735 93.408 54.1987C93.8431 55.2682 93.9625 55.2611 94.2416 54.1459C94.5276 53.0023 88.811 55.4284 92.4993 56.5427C94.8055 57.24 93.7949 52.6001 93.863 52.3151C94.0616 51.4834 97.0632 54.0399 93.9842 53.6C91.5356 53.25 94.3292 51.6541 95.1055 50.7835C95.6009 50.2282 95.8527 49.5242 95.6665 49.2182C95.0793 48.2567 92.8711 48.0293 92.3178 48.8736C92.0265 49.3192 91.5693 49.3497 91.3028 48.9419C91.0285 48.5224 91.4491 47.9386 92.2759 47.5946C94.1587 46.8106 94.655 44.7527 93.0555 44.3604C92.3741 44.1928 91.4877 42.9123 91.0853 41.5148C90.5888 39.7901 90.6136 39.3214 91.1623 40.0569C91.7987 40.911 92.115 40.9326 92.6469 40.1612C93.6375 38.723 93.1818 36.7456 91.8992 36.9128C90.9177 37.0409 87.045 34.3283 87.2134 33.6311C87.3337 33.1329 89.951 34.7894 90.1883 35.5142C90.5576 36.642 91.3574 36.5892 93.9381 35.2688L96.3409 34.0389L94.2494 29.5322C91.8759 24.4175 90.6291 22.9345 89.5777 23.9757C89.0665 24.4814 88.6864 24.3048 88.215 23.3421C87.648 22.1853 87.327 22.0897 85.8205 22.6288C84.3765 23.1446 83.9694 23.0546 83.4302 22.0994C82.5039 20.4599 82.7032 20.28 84.5281 21.1078C85.4132 21.509 86.4544 21.525 86.8407 21.1422C87.3302 20.6582 87.7334 20.9041 88.1701 21.9544C88.5149 22.7831 89.0671 23.2967 89.3969 23.0951C90.3668 22.503 89.7157 21.4863 86.7877 19.0184C83.9636 16.6385 79.1298 14.0626 79.8252 15.3082C80.281 16.1247 78.5196 17.607 77.4132 17.3398C76.9159 17.2197 77.0172 16.9307 77.705 16.5104C79.4498 15.444 79.3208 14.051 77.4345 13.5954C76.3323 13.3292 75.5666 13.5695 75.4069 14.2306C75.2657 14.8151 74.8414 15.2188 74.4639 15.1276C74.087 15.0366 74.0772 14.5281 74.4422 13.9976C74.9453 13.2679 74.5714 12.9039 72.9061 12.5017C70.5778 11.9393 70.0227 12.4344 71.067 14.1445C71.4167 14.7171 71.3826 15.3673 70.9904 15.5883C70.5987 15.8101 70.2321 15.5589 70.1763 15.0294C70.028 13.6385 68.5809 13.4907 66.2425 14.6275C61.574 16.8984 61.7043 16.7747 63.0218 17.6981C63.9618 18.3563 63.7108 18.4367 61.9286 18.0467C60.6563 17.7679 59.5375 17.8591 59.4434 18.2488C59.3493 18.6386 58.9634 18.8828 58.5859 18.7916C58.209 18.7006 58.1992 18.192 58.5642 17.6615C58.9299 17.1312 59.683 16.8069 60.2376 16.9409C61.6571 17.2837 62.7065 15.4839 61.9669 13.9742C61.267 12.5454 62.3485 12.5246 63.2193 13.9505C63.6146 14.5979 64.6698 14.5716 66.7326 13.8617C71.1214 12.3518 70.8768 11.3411 66.1865 11.6068ZM58.1149 14.9284C57.8796 15.9026 57.944 16.3404 58.2579 15.9003C58.5724 15.4611 58.765 14.6639 58.6858 14.1289C58.6072 13.5947 58.3502 13.9541 58.1149 14.9284ZM68.3998 18.4121C68.2411 19.0689 68.666 19.7213 69.3566 19.882C70.0658 20.0466 70.3498 19.87 70.0183 19.4704C69.6989 19.0858 69.268 18.4238 69.0612 18.0012C68.8546 17.5778 68.5565 17.7631 68.3998 18.4121ZM75.8623 21.9018C75.6969 22.7355 75.8242 22.944 76.1866 22.4338C76.5148 21.9717 76.637 21.354 76.4587 21.062C76.2803 20.7699 76.0122 21.1476 75.8623 21.9018ZM86.9544 26.047C86.3139 26.4952 86.083 26.9329 86.44 27.0191C86.797 27.1053 87.6018 26.7935 88.2282 26.3261C89.695 25.2316 88.494 24.9678 86.9544 26.047ZM91.0186 27.3368C90.3661 27.5587 89.6166 27.5209 89.352 27.2537C89.0874 26.9866 88.7813 27.1399 88.6716 27.5941C88.5584 28.0624 89.0116 28.3496 89.7189 28.258C90.6029 28.1423 90.7753 28.3722 90.311 29.0467C89.9509 29.5694 89.9287 30.2727 90.2612 30.6094C90.6553 31.0076 90.4918 31.5013 89.7958 32.0208C88.52 32.9733 89.0995 33.2122 91.2985 32.6402C92.4864 32.331 93.1292 32.5342 93.8035 33.4328C94.5675 34.4504 94.6956 34.4603 94.6201 33.4942C94.57 32.8635 93.668 32.0292 92.6144 31.6397C90.8965 31.0051 90.7938 30.7291 91.6137 28.9608C92.6381 26.7524 92.65 26.7837 91.0186 27.3368ZM52.8599 19.3074C51.9653 19.6965 51.5525 20.0925 51.9421 20.1866C52.3317 20.2807 53.382 20.0386 54.2766 19.6495C55.1706 19.2596 55.5839 18.8645 55.1943 18.7704C54.8048 18.6763 53.754 18.9174 52.8599 19.3074ZM94.2644 35.907C93.5172 36.4652 93.4222 37.0662 93.8993 38.2133C94.4461 39.5279 94.353 39.8826 93.2934 40.5296C92.6055 40.9506 92.0743 41.6847 92.1127 42.1619C92.2185 43.4743 94.7832 44.2467 96.0059 43.334C97.257 42.4003 97.1724 39.8827 95.904 40.2985C95.3903 40.4669 95.3438 40.2869 95.787 39.8488C96.671 38.9727 96.7449 35.5073 95.8836 35.2992C95.5492 35.2185 94.8206 35.4917 94.2644 35.907ZM95.587 44.1529C94.7436 44.9878 94.8859 47.8066 95.782 48.023C96.6072 48.2223 97.1471 46.0708 96.6437 44.5889C96.3784 43.8094 96.0649 43.6797 95.587 44.1529Z"
        fill="#31C0CC"
      />
    </svg>
  );
};

export default Logo;
