import moment from "moment";


const defualFilter= {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const RealFilter = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf("month")
};

export {RealFilter,defualFilter}