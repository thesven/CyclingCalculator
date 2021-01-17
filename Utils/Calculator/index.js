const calculatePowerZones = (twentyMinPower) => {

    let bands = [.55, .75, .9, 1.05, 1.2, 1.5, 1.51];

    let ftp = twentyMinPower * .95;

    let zones = { zones: [
        {low: 0, high: bands[1] * ftp, title: "Zone One", description: "Very Easy"},
        {low: bands[0] * ftp, high: bands[1] * ftp, title: "Zone Two", description: "Moderate"},
        {low: bands[1] * ftp, high: bands[2] * ftp, title: "Zone Three", description: "Sustainable"},
        {low: bands[2] * ftp, high: bands[3] * ftp, title: "Zone Four", description: "Challenging"},
        {low: bands[3] * ftp, high: bands[4] * ftp, title: "Zone Five", description: "Hard"},
        {low: bands[4] * ftp, high: bands[5] * ftp, title: "Zone Six", description: "Very Hard"},
        {low: bands[5] * ftp, high: bands[6] * ftp, title: "Zone Seven", description: "Max Effort"},
    ]};

    return zones;

}

const calculateHeartRateZones = (value) => {

}

export {calculatePowerZones, calculateHeartRateZones}