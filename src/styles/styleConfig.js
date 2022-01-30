const styleConfig = {
    default: {
        primaryColor: '#008AC8',
        layoutBg: '#fff',
        textColor: '#0F212E',
        textColorGray: '#6A7581',
        textColorDarkBlue: '#0B3B51',
        btnHeight: '40px',
        btnRadius: '0',
        btnTextShadow: 'none',
        btnFontWeight: '500',
        btnFontSize: '14px',
        btnLineHeight: '21px',
        labelFontSize: '12px',
        labelFontWeight: '600',
        labelColor: '#6A7581',
        labelColorDisabled: '#CDD3D8',
        inputRadius: '0',
        inputHeight: '40px',
        inputLineHeight: '39px',
        pageHeaderBg:
            'linear-gradient(270deg, #0e5387 -80.4%, #28b3e4 160.13%)',
        tabNavBg: '#0B3B51',
        tabColor: '#CDD3D8',
        tabActiveColor: '#fff',
        tabIndicator: '#e0e0e0',
        tabActiveIndicator: '#99D0E9',
        btnDisableBg: '#CDD3D8',
        btnDisableColor: '#EBF2F7',
        linkHoverColor: '#24b7f9',
    },    
};

export default styleConfig[process.env['REACT_APP_PROJECT_ID'] || 'default'];
