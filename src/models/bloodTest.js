const mongoose = require('mongoose');

const BloodTest = mongoose.model('BloodTest', {
    name: {
        type: String,
        required: true,
        trim: true,
    },
    Morfology: {
        type: Object,
        WBC: [Number],
        RBC: [Number],
        HGB: [Number],
        HCT: [Number],
        MCH: [Number],
        MCHC: [Number],
        MCV: [Number],
        RDW_SD: [Number],
        PLT: [Number],
        PDW: [Number],
        P_LCR: [Number],
        MPV: [Number],
        PCT: [Number],
        LYMP: [Number],
        NEUT: [Number],
        MONO: [Number],
        EOS: [Number],
        BASO: [Number],
        IG: [Number],

    },
    Biochemy: {
        type: Object,
        CK_M18: [Number],
        Creatine_Jaffe_M37: [Number],
        GFR: [Number],
        Glucose_L43: [Number],
        Iron_095: [Number],
        Potasium_N45: [Number],
    },
    Immunology : {
        type: Object,
        TSH_L69: [Number],
        fT4_069: [Number],
        FT3_055: [Number],
    },
});

module.exports = BloodTest;