class Setting {
    startDate: Date;
    endDate: Date;
    maxNumber: number;
}

class Room {
    period: number;
    count: number;
}

class Survey {
    startDate: Date;
    endDate: Date;
    result: [
        { title: string }
    ];
}

export class AdminMentoringSetting {
    mentor: Setting;
    mentee: Setting;
    room: Room;
    survey: Survey;
};