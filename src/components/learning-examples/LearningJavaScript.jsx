const person = {
    name: 'Ranga Karanam',
    address: {
        line1: 'Backer Street',
        city: 'London',
        country: 'UK',
    },
    profiles:['twitter', 'linkedin', 'instagram'],
    printProfile: () => {
        person.profiles.map(
            profile => console.log(profile)
        )
    }
}



export default function LearningJavaScript() {
    return (
        <>
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.address.city}</div>
            <div>{person.address.country}</div>
            <div>{person.printProfile()}</div>
        </>
    )
}