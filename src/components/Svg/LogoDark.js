import React from "react";

// eslint-disable-next-line react/display-name
const LogoDark = React.forwardRef(
  ({ onClick, href, width = 105, height = 81, className }, ref) => {
    return (
      <svg
        href={href}
        onClick={onClick}
        ref={ref}
        width={width}
        height={height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M38.764 62.407c-.412 0-.81-.09-1.19-.268-.382-.18-.71-.51-.982-.992H36.5c0 .459-.012.937-.035 1.435-.024.498-.067.977-.129 1.436a14.036 14.036 0 0 1-.654 2.975c-.304.91-.677 1.732-1.121 2.463a10.063 10.063 0 0 1-1.472 1.925 8.985 8.985 0 0 1-1.728 1.4c-.6.374-1.219.654-1.857.841a6.28 6.28 0 0 1-1.857.292c-.864 0-1.635-.171-2.313-.514a4.88 4.88 0 0 1-1.693-1.388c-.46-.592-.81-1.288-1.051-2.09a8.941 8.941 0 0 1-.362-2.59c0-.218.007-.49.023-.817.015-.319.058-.677.128-1.074.07-.389.172-.809.304-1.26.132-.451.32-.914.56-1.389a10.08 10.08 0 0 1 2.207-2.906c.71-.645 1.442-1.19 2.197-1.633a17.207 17.207 0 0 1 2.23-1.132 18.087 18.087 0 0 1 2.114-.736c.678-.194 1.3-.357 1.87-.49.07 0 .14.012.21.035.077.024.116.059.116.105 0 .04-.02.082-.058.129a.281.281 0 0 1-.152.105c-.864.272-1.658.544-2.383.817-.716.272-1.374.552-1.974.84-.591.288-1.136.587-1.635.898-.49.304-.938.627-1.343.969a9.44 9.44 0 0 0-1.46 1.505 9.172 9.172 0 0 0-.98 1.553 7.409 7.409 0 0 0-.55 1.552 7.136 7.136 0 0 0-.163 1.482c0 .801.113 1.486.339 2.054.225.575.53 1.046.91 1.412.382.373.826.645 1.332.817.506.179 1.04.268 1.6.268.74 0 1.448-.14 2.126-.42a7.628 7.628 0 0 0 1.915-1.109 9.637 9.637 0 0 0 1.612-1.622c.49-.614.907-1.256 1.25-1.925.342-.67.607-1.346.794-2.031a7.29 7.29 0 0 0 .292-1.972 8.15 8.15 0 0 0-.164-1.482c-.101-.584-.23-1.21-.385-1.88-.156-.668-.323-1.36-.502-2.076-.18-.716-.347-1.412-.503-2.09a43.228 43.228 0 0 1-.397-1.937 9.87 9.87 0 0 1-.151-1.598c0-.397.085-.872.256-1.424.18-.552.468-1.198.865-1.937l.117.07c-.016.07-.024.151-.024.245v.268c0 .475.047 1.031.14 1.669.094.638.222 1.338.386 2.1.163.755.35 1.56.56 2.416.21.856.432 1.735.666 2.638.234.902.49 1.68.77 2.334.289.653.585 1.167.889 1.54.21.272.358.587.443.945.094.358.14.697.14 1.016v.233Z"
          fill="#fff"
        />
        <path
          d="M35.097 52.736c.234.272.417.529.549.77.132.233.222.451.269.653a53.775 53.775 0 0 0 .315 1.272c.078.296.164.615.257.957.093.343.19.681.292 1.016.195.669.409 1.237.642 1.703.234.475.499.856.794 1.144.296.296.631.51 1.005.642.381.132.814.198 1.296.198.296 0 .608-.066.935-.198.334-.132.661-.315.98-.549.328-.233.64-.517.935-.852.296-.326.56-.688.794-1.085.172-.28.339-.603.502-.968.156-.374.312-.728.468-1.062.163-.335.327-.615.49-.84.171-.234.347-.35.526-.35a.53.53 0 0 1 .35.14c.117.085.257.206.42.361.164.163.367.354.608.572.241.218.545.459.91.724.538.373.92.739 1.145 1.096.234.366.35.724.35 1.074v.303a1.64 1.64 0 0 1-.595.269 2.375 2.375 0 0 1-.619.082c-.249 0-.487-.05-.712-.152a6.471 6.471 0 0 1-.654-.338 10.296 10.296 0 0 0-.643-.339 1.348 1.348 0 0 0-.607-.152c-.14 0-.265.07-.374.21a3.388 3.388 0 0 0-.327.572 13.79 13.79 0 0 0-.339.829c-.124.303-.268.618-.432.945-.155.327-.342.65-.56.969a4.64 4.64 0 0 1-.771.887c-.46.412-.938.712-1.437.898a4.298 4.298 0 0 1-1.576.292c-.483 0-.946-.093-1.39-.28a4.11 4.11 0 0 1-1.25-.84c-.381-.374-.736-.848-1.063-1.424a10.05 10.05 0 0 1-.829-2.007c-.156-.53-.3-1.066-.432-1.61a35.246 35.246 0 0 1-.339-1.506 29.413 29.413 0 0 1-.222-1.226c-.054-.35-.081-.599-.081-.747 0-.365.023-.723.07-1.073.047-.35.117-.677.21-.98h.14Z"
          fill="#fff"
        />
        <path
          d="M59.39 52.56c.163.038.327.061.49.07h.491c.467 0 .954-.079 1.46-.234a7.794 7.794 0 0 0 1.553-.7 10.105 10.105 0 0 0 1.542-1.144 11.839 11.839 0 0 0 1.472-1.564c.109-.148.21-.3.303-.455.094-.156.172-.303.234-.444.07-.147.12-.28.152-.396.039-.125.058-.23.058-.315 0-.187-.043-.382-.128-.584a1.5 1.5 0 0 0-.374-.548 1.965 1.965 0 0 0-.63-.409 2.291 2.291 0 0 0-.9-.163c-.63 0-1.223.16-1.775.478-.545.312-1.055.759-1.53 1.342-.475.584-.92 1.296-1.332 2.136a24.16 24.16 0 0 0-1.133 2.836l.047.093Zm-12.614 2.87c.39.412.806.727 1.25.945.436.21.9.315 1.39.315.506 0 1.036-.136 1.588-.408.553-.272 1.13-.72 1.729-1.342.288-.296.541-.603.759-.922.218-.32.409-.63.572-.934.172-.31.323-.607.456-.887.124-.28.245-.52.362-.723.124-.21.245-.377.362-.502a.569.569 0 0 1 .409-.187c.155 0 .323.082.502.245l.584.537c.202.203.42.393.654.572.233.171.486.272.759.303l.093-.046a26.588 26.588 0 0 1 1.238-3.758c.483-1.16 1.02-2.163 1.612-3.01.6-.849 1.25-1.51 1.95-1.985.71-.482 1.46-.723 2.255-.723.389 0 .747.066 1.074.198.335.125.62.311.853.56.241.241.428.537.56.887.133.35.199.75.199 1.202 0 .35-.023.68-.07.992-.055.32-.101.626-.14.922-.063.46-.133.875-.21 1.249-.078.365-.16.696-.246.992a9.681 9.681 0 0 1-.268.805c-.094.233-.187.447-.28.642a8.706 8.706 0 0 1-1.064 1.529 9.47 9.47 0 0 1-1.214 1.167 8.08 8.08 0 0 1-1.273.852 9.243 9.243 0 0 1-1.25.571 8.24 8.24 0 0 1-1.121.315c-.35.063-.658.094-.923.094-.46 0-.86-.04-1.203-.117a4.563 4.563 0 0 1-1.565-.665 23.466 23.466 0 0 1-.514-.374 3.416 3.416 0 0 0-.455-.291.99.99 0 0 0-.467-.117.593.593 0 0 0-.432.187 2.262 2.262 0 0 0-.362.502 14.58 14.58 0 0 0-.35.7c-.125.272-.266.556-.421.852-.148.288-.32.58-.514.875a4.658 4.658 0 0 1-.7.829c-.538.513-1.099.886-1.683 1.12a4.993 4.993 0 0 1-1.892.35c-.46 0-.887-.082-1.285-.245a3.57 3.57 0 0 1-1.027-.63 2.856 2.856 0 0 1-.69-.829 1.865 1.865 0 0 1-.245-.887c0-.202.043-.443.129-.723.086-.28.222-.615.409-1.004h.116ZM70.672 46.653c.164-.467.331-.942.502-1.424.164-.483.347-.988.55-1.517h.093c.6 1.353 1.11 2.723 1.53 4.107.428 1.385.782 2.801 1.063 4.248.272 1.447.576 2.805.91 4.073.343 1.26.701 2.377 1.075 3.35l-.234.98c-.179 0-.373-.066-.584-.198-.21-.14-.432-.397-.665-.77-.234-.382-.471-.903-.713-1.565-.233-.669-.46-1.536-.677-2.602a37.41 37.41 0 0 0-1.098-3.991 71.246 71.246 0 0 0-1.752-4.691Z"
          fill="#fff"
        />
        <path
          d="M73.779 52.098c.234.273.416.53.549.77.132.234.222.452.268.654l.117.49c.055.226.12.486.199.782.078.296.163.615.257.957.093.342.19.68.292 1.015.194.67.409 1.237.642 1.704.234.475.498.856.794 1.144.296.295.63.51 1.005.642.381.132.813.198 1.296.198.296 0 .607-.066.934-.198.335-.133.662-.316.981-.549a5.58 5.58 0 0 0 .935-.852c.296-.326.56-.688.794-1.085.171-.28.339-.603.502-.969.156-.373.312-.727.467-1.062.164-.334.327-.614.49-.84.172-.233.347-.35.526-.35a.53.53 0 0 1 .35.14c.118.086.258.206.421.362.164.163.366.354.608.572.241.217.545.459.91.723.538.374.92.74 1.145 1.097.234.366.35.724.35 1.074v.303a1.64 1.64 0 0 1-.595.269 2.37 2.37 0 0 1-.62.081c-.248 0-.486-.05-.712-.151a6.504 6.504 0 0 1-.654-.339 10.35 10.35 0 0 0-.642-.338 1.35 1.35 0 0 0-.607-.152c-.14 0-.265.07-.374.21a3.387 3.387 0 0 0-.327.572c-.109.241-.222.517-.339.828-.124.304-.268.619-.432.946-.156.326-.342.65-.56.968a4.644 4.644 0 0 1-.771.887 4.55 4.55 0 0 1-1.437.899 4.298 4.298 0 0 1-1.576.292 3.55 3.55 0 0 1-1.39-.28 4.11 4.11 0 0 1-1.25-.84c-.382-.374-.736-.849-1.063-1.424a10.06 10.06 0 0 1-.83-2.008c-.155-.529-.299-1.066-.431-1.61a34.98 34.98 0 0 1-.339-1.506 29.41 29.41 0 0 1-.222-1.225 5.61 5.61 0 0 1-.082-.747c0-.366.024-.723.07-1.074.047-.35.117-.676.21-.98h.14Z"
          fill="#fff"
        />
        <path
          d="M87.77 56.189c.491 0 .986-.113 1.484-.338.506-.226 1.016-.596 1.53-1.11.49-.49.876-.987 1.156-1.493.288-.513.432-1.027.432-1.54 0-.358-.078-.751-.233-1.179a15.98 15.98 0 0 0-.584-1.4c-.234-.498-.487-1.031-.76-1.6a20.593 20.593 0 0 1-.759-1.773 15.656 15.656 0 0 1-.584-1.972 9.596 9.596 0 0 1-.233-2.136c0-.684.066-1.393.198-2.124.14-.731.386-1.501.736-2.31.14-.32.304-.576.49-.77.195-.203.406-.304.631-.304l.07.07c0 .295-.077.622-.233.98-.148.35-.312.7-.49 1.05-.11.21-.191.444-.246.7a4.173 4.173 0 0 0-.082.864c0 .615.078 1.218.234 1.81.163.583.362 1.158.596 1.726.241.56.502 1.113.782 1.657.28.553.537 1.101.77 1.646.242.544.44 1.09.597 1.634.163.544.245 1.089.245 1.633a6.728 6.728 0 0 1-.094 1.133c-.023.194-.05.404-.081.63-.04.225-.074.478-.105.758a13.458 13.458 0 0 1-.468 2.16 9.795 9.795 0 0 1-.654 1.645 5.455 5.455 0 0 1-.84 1.213c-.335.366-.697.681-1.087.946-.39.264-.798.466-1.226.606-.42.148-.833.222-1.238.222-.327 0-.662-.074-1.005-.221a3.34 3.34 0 0 1-.945-.572 3.01 3.01 0 0 1-.69-.817 1.759 1.759 0 0 1-.28-.934c0-.202.043-.443.129-.723.085-.28.221-.615.408-1.004h.117c.467.467.892.79 1.273.969.374.178.72.268 1.04.268Z"
          fill="#fff"
        />
        <path
          d="M97.605 55.06a1.05 1.05 0 0 1-.094.186c-.039.063-.078.094-.117.094-.023 0-.039-.031-.046-.094v-.186c0-.14.035-.46.105-.957.07-.498.105-1.16.105-1.984 0-1.416-.055-2.766-.164-4.05a35.304 35.304 0 0 0-.455-3.594 21.67 21.67 0 0 0-.76-3.023c-.303-.902-.657-1.668-1.062-2.299-.405-.638-.857-1.128-1.355-1.47a2.837 2.837 0 0 0-1.647-.525c-.319 0-.603.085-.852.256-.25.164-.456.405-.62.724-.155.296-.287.53-.396.7a6.1 6.1 0 0 1-.35.467l-.094-.023v-.28c0-.203.023-.471.07-.806.039-.334.14-.696.304-1.085.179-.42.385-.79.619-1.108a4.32 4.32 0 0 1 .724-.806 2.79 2.79 0 0 1 .77-.49c.257-.109.51-.163.76-.163.6 0 1.16.186 1.681.56.522.365.997.883 1.425 1.552.429.661.806 1.451 1.133 2.369.335.91.615 1.914.841 3.01a32.11 32.11 0 0 1 .514 3.479c.117 1.221.175 2.474.175 3.757 0 1.027-.03 1.829-.093 2.404-.055.576-.14 1.004-.257 1.284-.132.35-.276.712-.432 1.085a19.89 19.89 0 0 1-.432 1.016Z"
          fill="#fff"
        />
        <path
          d="M68.698 43.883c0-.024.02-.098.059-.222a3.1 3.1 0 0 1 .14-.397c.054-.155.117-.303.187-.443.07-.148.136-.26.198-.339v-.023c-.373-.093-.677-.245-.91-.455a1.032 1.032 0 0 1-.351-.782c0-.093.016-.222.047-.385.023-.164.078-.37.163-.619.055-.186.133-.361.234-.525a1.44 1.44 0 0 1 .362-.42c.14-.117.311-.21.514-.28.194-.07.424-.105.689-.105.436 0 .77.07 1.004.21.234.132.35.303.35.514 0 .163-.03.322-.093.478-.07.163-.14.338-.21.525-.023.047-.055.07-.094.07-.062 0-.1-.039-.116-.117a.528.528 0 0 0-.292-.431c-.18-.102-.463-.152-.853-.152-.342 0-.603.058-.782.175-.18.109-.269.222-.269.338a.58.58 0 0 0 .187.42c.117.117.26.222.432.316.163.085.33.151.502.198.171.047.312.07.42.07.195 0 .406-.031.631-.093.234-.063.468-.14.701-.234.242-.1.479-.206.713-.315.24-.117.463-.23.665-.338a.27.27 0 0 1 .105-.035c.047 0 .07.023.07.07 0 .03-.019.066-.058.105a1.6 1.6 0 0 0-.35.49c-.078.163-.14.288-.187.373a1.12 1.12 0 0 1-.362.409 3.688 3.688 0 0 1-.56.315c-.211.101-.437.198-.678.292a7.253 7.253 0 0 0-.701.338 3.597 3.597 0 0 0-.654.42c-.203.156-.37.343-.502.56-.04.047-.074.09-.105.129a.179.179 0 0 1-.129.058c-.078 0-.117-.054-.117-.163ZM47.197 68.466c-.039.21-.105.447-.199.711-.1.273-.206.53-.315.77-.109.242-.21.444-.303.608-.094.163-.156.245-.187.245a.99.99 0 0 1-.386-.105 3.594 3.594 0 0 1-.525-.257 6.066 6.066 0 0 1-1.121-.759 3.105 3.105 0 0 1-.433-.396.967.967 0 0 1-.222-.327c0-.047.047-.183.14-.409.086-.225.187-.47.304-.735.117-.264.238-.51.362-.735.125-.226.222-.362.292-.409.125.14.288.296.49.467.203.18.425.35.666.514.242.17.487.33.736.478.25.148.483.26.701.339Zm1.215-2.521c.319.397.712.75 1.18 1.062.474.311.953.556 1.436.735-.164.428-.312.786-.444 1.074a8.75 8.75 0 0 1-.327.688 2.554 2.554 0 0 1-.234.385c-.054.078-.093.117-.116.117a.881.881 0 0 1-.292-.082 3.205 3.205 0 0 1-.456-.21 9.176 9.176 0 0 1-.549-.326 5.203 5.203 0 0 1-.537-.386 3.387 3.387 0 0 1-.456-.42 1.402 1.402 0 0 1-.28-.443c0-.055.035-.18.105-.374.078-.186.168-.396.269-.63.109-.233.226-.463.35-.688.125-.218.242-.386.35-.502ZM82.842 49.084c-.039.21-.105.451-.198.723-.102.265-.207.518-.316.76-.109.24-.21.443-.303.606-.094.163-.156.245-.187.245a1.09 1.09 0 0 1-.386-.093 6.443 6.443 0 0 1-1.11-.619 8.02 8.02 0 0 1-.537-.397 4.494 4.494 0 0 1-.432-.396 1.07 1.07 0 0 1-.222-.339c0-.047.047-.183.14-.408.086-.226.187-.471.304-.736.117-.264.238-.51.362-.735.125-.225.222-.361.292-.408.125.14.288.3.49.478.203.171.425.343.666.514.242.163.487.319.736.466.25.148.483.261.701.339Zm1.215-2.52c.319.396.712.75 1.18 1.061.474.311.953.556 1.436.735-.164.428-.312.786-.444 1.074-.125.288-.234.521-.327.7a2.728 2.728 0 0 1-.234.374c-.054.078-.093.116-.116.116a1 1 0 0 1-.292-.07 4.775 4.775 0 0 1-.456-.221 15.583 15.583 0 0 1-.549-.315 9.491 9.491 0 0 1-.537-.386 4.053 4.053 0 0 1-.456-.431 1.596 1.596 0 0 1-.28-.444c0-.054.035-.175.105-.362.078-.194.168-.408.269-.641.109-.234.226-.46.35-.677.125-.226.242-.397.35-.514Z"
          fill="#31C0CC"
        />
        <path
          d="m58.227 80.81-.716-.323c.978-2.41 2.1-4.306 3.364-5.69 1.265-1.384 2.696-2.076 4.295-2.076.549 0 1.157.06 1.825.179.692.119 1.277.179 1.754.179.788 0 1.181.381 1.181 1.145 0 .787-.19 1.527-.572 2.219a4.443 4.443 0 0 1-1.54 1.646c-.62.43-1.312.645-2.075.645-.525 0-1.098-.108-1.718-.323a5.634 5.634 0 0 0-1.718-.286c-.883 0-1.623.227-2.22.68-.572.453-1.192 1.122-1.86 2.004Z"
          fill="#fff"
        />
        <path
          d="M65.76 78.746c-.788 0-1.182-.382-1.182-1.146 0-.716.18-1.42.537-2.111a4.733 4.733 0 0 1 1.503-1.719c.645-.453 1.408-.68 2.291-.68a6.49 6.49 0 0 0 1.575-.178c.5-.12.978-.287 1.431-.502-.381-.81-.787-1.42-1.216-1.825-.43-.43-.99-.644-1.683-.644h-.286a.675.675 0 0 0-.215.036l-.214-.358c.525-1.122 1.3-1.957 2.326-2.506 1.05-.548 2.136-.823 3.257-.823.668 0 1.3.096 1.897.287.596.19 1.086.489 1.467.894.406.382.609.883.609 1.504 0 .548-.155 1.085-.466 1.61-.286.501-.775 1.074-1.467 1.718.215.072.513.108.895.108.262 0 .465.119.608.357.143.215.215.466.215.752 0 .74-.167 1.253-.501 1.539-.31.286-.776.43-1.396.43-.835 0-1.563-.24-2.183-.716l-.072-.036a54.11 54.11 0 0 1-2.47 2.147 9.19 9.19 0 0 1-2.361 1.396c-.812.31-1.778.466-2.9.466Z"
          fill="#fff"
        />
        <path
          d="M75.72 75.524c-.166 0-.345-.083-.536-.25-.215-.191-.322-.477-.322-.86 0-.644.203-1.12.608-1.43.406-.335.8-.502 1.181-.502 2.792 0 5.226-1.432 7.302-4.295.668-.906 1.205-1.622 1.61-2.147.43-.525.812-.907 1.146-1.146.334-.262.703-.43 1.11-.5a8.42 8.42 0 0 1 .68-1.039c.285-.405.572-.775.858-1.11.287-.357.525-.62.716-.787h.43c.477 1.17.954 2.064 1.431 2.685.334.405.56.728.68.966.12.239.18.501.18.788 0 .381-.108.823-.323 1.324a6.683 6.683 0 0 1-.859 1.396c-.358.453-.74.835-1.145 1.145-.406.286-.8.43-1.181.43-.335 0-.645-.06-.931-.18a9.163 9.163 0 0 0-1.575-.572c-.453-.143-.859-.215-1.217-.215-.238 0-.608.227-1.11.68-.5.43-1.156 1.062-1.968 1.897-1.193 1.24-2.302 2.171-3.328 2.792-1.002.62-2.148.93-3.436.93ZM104.743 77.552c-1.766 0-3.066-.668-3.901-2.004-.812-1.36-1.217-3.352-1.217-5.977 0-1.98.035-3.913.107-5.798.096-1.885.203-3.615.322-5.19.119-1.598.251-2.97.394-4.116.143-1.169.274-2.016.394-2.54.286-1.194.715-2.494 1.288-3.902l.752.215c-.263 1.622-.466 3.698-.609 6.227-.143 2.53-.215 5.5-.215 8.912 0 .907.024 1.861.072 2.864.072.978.239 1.896.501 2.755.286.86.728 1.563 1.324 2.112.621.525 1.468.787 2.542.787 1.026 0 1.539.68 1.539 2.04 0 .907-.179 1.623-.537 2.148-.358.525-.8.907-1.325 1.145-.501.215-.978.322-1.431.322Z"
          fill="#fff"
        />
        <path
          d="M104.696 77.552c-1.002 0-1.503-.68-1.503-2.04 0-.74.119-1.324.358-1.753.215-.454.465-.8.751-1.038.263-.239.466-.382.609-.43.024-.334.119-.835.286-1.503.191-.668.465-1.432.823-2.29.358-.86.788-1.719 1.289-2.578.716-1.193 1.443-2.04 2.183-2.54.74-.526 1.623-.788 2.649-.788 1.288 0 2.803.322 4.545.966.835.31 1.551.56 2.148.752.596.167 1.049.298 1.36.394l.107.429c-1.575 2.434-3.126 4.593-4.653 6.478-1.527 1.861-3.173 3.317-4.939 4.367-1.742 1.05-3.746 1.575-6.013 1.575Zm1.503-5.655h.287c1.407 0 2.779-.155 4.116-.465a13.75 13.75 0 0 0 3.65-1.467c1.122-.668 2.017-1.48 2.685-2.434a25.22 25.22 0 0 0-3.043-.93c-.906-.24-1.718-.358-2.433-.358-1.074 0-1.969.286-2.685.859a5.975 5.975 0 0 0-1.682 2.147 11.937 11.937 0 0 0-.895 2.648ZM108.59 86.405a28.748 28.748 0 0 0-1.503-1.468c-.501-.43-.99-.835-1.467-1.217v-.286c.214-.31.536-.716.966-1.217.406-.477.823-.942 1.253-1.396.405-.43.704-.704.894-.823h.323c.93.597 1.622 1.121 2.075 1.575.478.477.716.954.716 1.431 0 .86-.99 1.993-2.97 3.4h-.287ZM58.006 68.462a39.575 39.575 0 0 0-1.503-1.432 56.43 56.43 0 0 0-1.468-1.217v-.322c.239-.334.573-.74 1.002-1.217a24.29 24.29 0 0 1 1.217-1.396c.406-.43.704-.704.895-.823h.322c.573.358 1.074.704 1.503 1.038.406.31.716.632.93.966.263-.334.562-.68.896-1.038.334-.382.656-.716.966-1.002.31-.31.537-.513.68-.608h.286c.955.596 1.659 1.133 2.112 1.61.477.454.716.919.716 1.396 0 .907-.955 2.04-2.863 3.4h-.323c-.405-.405-.799-.775-1.18-1.11-.382-.357-.74-.68-1.074-.966-.382.764-1.313 1.67-2.792 2.72h-.322Z"
          fill="#fff"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m30.684 80.485-9.966 3.019 7.738 1.623c8.853 1.858 20.635 6.378 26.078 10.003l3.718 2.478.57-4.9c.639-5.487-.263-6.946-6.44-10.419-8.734-4.908-10.862-5.086-21.698-1.804Zm44.798 2.307c-10.993 1.623-13.886 3.614-14.637 10.074l-.561 4.823 5.566-1.804c7.451-2.415 16.698-3.589 26.344-3.345l7.949.202-9.078-5.138c-4.993-2.827-9.303-5.248-9.577-5.382-.275-.133-2.978.123-6.006.57ZM8.742 89.04c-5.986.501-6.205.626-6.906 3.894-.692 3.232-.598 3.364 2.19 3.098 1.603-.151 6.398-.622 10.656-1.044 14.347-1.425 32.373 2.925 45.443 10.966 3.293 2.026 5.762 3.202 5.487 2.613-.86-1.838-14.727-10.494-21.843-13.635-8.352-3.686-25.97-6.65-35.027-5.892ZM120.601 16.36c-1.238 2.267-1.137 3.155.643 5.63 1.162 1.617 2.552 3.046 3.088 3.175 1.352.327 6.919-3.183 7.255-4.573.151-.627-.779-.333-2.067.653-3.384 2.59-7.197.423-7.343-4.175l-.107-3.403-1.469 2.692Zm-27.793.118c-4.345.247-16.349 3.561-16.595 4.582-.122.503.734.847 1.9.765 1.265-.09 2.014.298 1.854.96-.148.61-.71.665-1.249.12-.66-.667-.904-.405-.747.8.29 2.238-1.14 1.99-2.311-.4-.682-1.39-1.249-1.607-2.548-.97-.919.451-1.579 1.523-1.468 2.383.138 1.055-.225 1.267-1.12.65-.726-.5-1.653-.582-2.058-.18-.406.4-.235 1.089.379 1.528.686.49.457.67-.591.467-2.026-.39-4.98 2.591-4.381 4.422.252.767.048.908-.505.35-.51-.515-1.6-.178-2.427.748-2.634 2.953-1.932 2.981 3.821.15 6.896-3.393 15.669-5.5 21.12-5.073 3.766.297 6.244-1.324 6.55-4.285.042-.4.674-.313 1.406.19 1.762 1.215 1.317 2.777-.655 2.301-.858-.207-1.51.223-1.448.954.068.812 2.21 1.92 5.5 2.845 2.965.833 7.164 2.65 9.333 4.036 2.922 1.867 4.196 2.27 4.919 1.553 1.494-1.478.274-4.584-2.337-5.953-1.392-.73-2.16-1.913-1.896-2.925.416-1.598.477-1.582 1.029.269.324 1.082 1.503 2.188 2.621 2.458 1.699.41 2.08-.013 2.314-2.57.177-1.937.71-2.957 1.452-2.778 1.017.245.693 2.31-.869 5.526-1.076 2.215-.681 3.487 1.224 3.947 1.124.271 2.43 1.174 2.905 2.005 1.171 2.05.864 5.163-.477 4.84-.598-.145-.761-.585-.364-.978 1.31-1.297-.812-4.675-2.775-4.42-2.742.357-2.861 2.81-.223 4.616 1.268.869 3.972 4.34 6.008 7.714 2.036 3.372 4.154 5.984 4.709 5.803.554-.183.755.453.445 1.41-.308.96-.097 3.954.47 6.656.566 2.702.97 5.781.898 6.843-.147 2.103 4.099-4.705 2.566-4.584-7.203-1.042 6.2 4.066.784 5.393-5.621 1.378-3.465 3.081 2.544 1.915 3.148-.61-7.868 4.234-4.445 4.175 8.351-.142-1.759-5.706-1.031-4.495.822 1.365-1.565 12.56-3.212 15.297-1.309 2.175-1.285 2.204.534.65 2.855-2.437 5.942-7.892 5.762-10.182-.131-1.663-.033-1.714.547-.288.605 1.487.771 1.477 1.159-.074.398-1.59-7.553 1.784-2.423 3.334 3.207.97 1.802-5.484 1.896-5.88.277-1.157 4.452 2.399.169 1.787-3.406-.487.48-2.707 1.56-3.917.689-.773 1.039-1.752.78-2.178-.817-1.337-3.888-1.653-4.658-.479-.405.62-1.041.662-1.411.095-.382-.583.203-1.395 1.353-1.874 2.619-1.09 3.309-3.952 1.084-4.498-.947-.233-2.18-2.014-2.74-3.958-.69-2.399-.656-3.05.107-2.028.885 1.188 1.325 1.218 2.065.145 1.378-2 .744-4.75-1.04-4.518-1.365.178-6.751-3.594-6.517-4.564.167-.693 3.807 1.611 4.137 2.619.514 1.569 1.627 1.495 5.216-.341l3.342-1.71-2.909-6.27c-3.301-7.113-5.035-9.176-6.498-7.727-.711.703-1.239.457-1.895-.882-.789-1.609-1.235-1.741-3.331-.992-2.008.718-2.574.592-3.324-.736-1.289-2.28-1.011-2.53 1.527-1.38 1.231.559 2.679.581 3.216.049.681-.674 1.242-.332 1.849 1.13.48 1.152 1.248 1.866 1.707 1.586 1.349-.824.443-2.238-3.629-5.67-3.928-3.31-10.651-6.893-9.684-5.16.634 1.135-1.816 3.197-3.355 2.825-.692-.167-.551-.57.406-1.154 2.427-1.483 2.247-3.42-.376-4.054-1.533-.37-2.598-.036-2.82.883-.197.813-.787 1.375-1.312 1.248-.524-.127-.538-.834-.03-1.572.699-1.015.179-1.52-2.137-2.08-3.238-.782-4.01-.094-2.558 2.285.487.796.439 1.7-.106 2.008-.545.308-1.055-.041-1.132-.777-.207-1.935-2.22-2.14-5.472-.56-6.493 3.159-6.312 2.987-4.48 4.271 1.308.916.959 1.027-1.52.485-1.77-.388-3.326-.26-3.457.281-.13.542-.667.882-1.192.755-.524-.126-.538-.834-.03-1.572.508-.737 1.556-1.188 2.327-1.002 1.974.477 3.434-2.026 2.405-4.126-.973-1.988.531-2.016 1.742-.033.55.9 2.018.864 4.887-.124 6.104-2.1 5.764-3.505-.76-3.136Zm-11.226 4.62c-.328 1.355-.238 1.964.199 1.352.437-.611.705-1.72.595-2.464-.11-.743-.467-.243-.794 1.112Zm14.305 4.845c-.221.914.37 1.821 1.33 2.045.987.229 1.382-.017.92-.573-.444-.535-1.043-1.455-1.33-2.043-.288-.589-.702-.331-.92.571Zm10.379 4.854c-.23 1.16-.053 1.45.451.74.457-.643.626-1.502.378-1.908-.248-.406-.621.12-.829 1.168Zm15.428 5.765c-.891.624-1.212 1.233-.716 1.352.497.12 1.616-.313 2.487-.963 2.04-1.523.37-1.89-1.771-.389Zm5.652 1.794c-.907.309-1.95.256-2.318-.115-.368-.372-.794-.158-.946.473-.157.652.473 1.051 1.457.924 1.229-.161 1.469.158.823 1.097-.501.727-.532 1.705-.069 2.173.548.554.321 1.24-.647 1.963-1.775 1.325-.969 1.657 2.09.862 1.652-.43 2.546-.148 3.484 1.102 1.062 1.416 1.24 1.43 1.135.086-.069-.878-1.324-2.038-2.789-2.58-2.389-.883-2.532-1.266-1.392-3.726 1.425-3.072 1.441-3.028-.828-2.259ZM74.273 27.19c-1.245.54-1.819 1.091-1.277 1.222s2.003-.205 3.247-.747c1.244-.542 1.818-1.091 1.277-1.222-.542-.131-2.004.204-3.247.747Zm57.588 23.087c-1.04.777-1.172 1.613-.508 3.208.761 1.829.631 2.322-.843 3.222-.957.585-1.695 1.606-1.642 2.27.147 1.825 3.714 2.9 5.415 1.63 1.74-1.298 1.622-4.8-.142-4.222-.714.235-.779-.016-.163-.625 1.23-1.219 1.333-6.039.135-6.328-.465-.112-1.479.268-2.252.845Zm1.839 11.47c-1.173 1.16-.975 5.081.272 5.382 1.147.277 1.898-2.715 1.198-4.776-.369-1.084-.805-1.265-1.47-.607Z"
          fill="#31C0CC"
        />
      </svg>
    );
  }
);
export default LogoDark;
