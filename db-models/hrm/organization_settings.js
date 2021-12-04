export default [
    {
        id: 1,
        organizationID: 1,
        option_key: 'officeHours',
        option_value: {
            startTime: '',
            endTime: '',
        },
    },
    {
        id: 2,
        organizationID: 1,
        option_key: 'workingDays',
        option_value: [
            { day: 'sun', dayLength: 'fullDay' },
            { day: 'mon', dayLength: 'fullDay' },
            { day: 'tue', dayLength: 'fullDay' },
            { day: 'wed', dayLength: 'fullDay' },
            { day: 'thu', dayLength: 'fullDay' },
            { day: 'fri', dayLength: 'offDay' },
            { day: 'sat', dayLength: 'offDay' },
        ],
    },
    {
        id: 3,
        organizationID: 1,
        option_key: 'lunchTime',
        option_value: {
            startTime: '',
            endTime: '',
        },
    },
    {
        id: 4,
        organizationID: 1,
        option_key: 'accountsManagers',
        option_value: [ 1, 2, 3 ],
    },
];