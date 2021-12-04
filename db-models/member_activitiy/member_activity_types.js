export default [
    {
        key: 'general',
        organization_id: 1,
        label: 'General',
        icon: '',
        traceable: true,
        maxTime: 28800, // In Second - 8h
    },
    {
        key: 'overtime',
        organization_id: 1,
        label: 'Overtime',
        icon: '',
        traceable: true,
    },
    {
        key: 'break',
        organization_id: 1,
        label: 'Break',
        icon: '',
        traceable: false,
        maxTime: 600, // In Second - 10m
    },
    {
        key: 'extraBreak',
        organization_id: 1,
        label: 'Extra Break',
        icon: '',
        traceable: false,
    },
    {
        key: 'washroom1',
        organization_id: 1,
        label: 'Washroom 1',
        icon: '',
        traceable: false,
        canAccessMultipleUser: false,
    },
    {
        key: 'washroom2',
        organization_id: 1,
        label: 'Washroom 2',
        icon: '',
        traceable: false,
        canAccessMultipleUser: false,
    },
    {
        key: 'washroomRemote',
        organization_id: 1,
        label: 'Washroom Remote',
        icon: '',
        traceable: false,
        canAccessMultipleUser: true,
    },
];