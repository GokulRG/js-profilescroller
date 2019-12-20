const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'Male',
        location: 'Boston, MA',
        lookingfor: 'Female',
        image: 'https://i.pravatar.cc/300'
    },
    {
        name: 'Jane Doe',
        age: 22,
        gender: 'Female',
        location: 'Sunnyvale, CA',
        lookingfor: 'Male',
        image: 'https://i.pravatar.cc/300'
    },
    {
        name: 'Ray William Johnson',
        age: 34,
        gender: 'Male',
        location: 'Seattle, WA',
        lookingfor: 'Female',
        image: 'https://i.pravatar.cc/300'
    }
];

//Profile Iterator
function profileIterator(data) {
    let nextIndex = 0;

    //We should return an object with a next function
    return {
        next: function () {
            return (nextIndex < data.length) ? {value: data[nextIndex++], done: false} : {done: true}
        }
    };
}

const profileItems = profileIterator(data);

//Call Profile
nextProfileDisplay();

document.getElementById('next').addEventListener('click', nextProfileDisplay);

function nextProfileDisplay() {

    const currentProfile = profileItems.next().value;

    if (currentProfile) {
        document.getElementById('profileDisplay').innerHTML =
            `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Gender: ${currentProfile.gender}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Looking For: ${currentProfile.lookingfor}</li>
        </ul>
        `;

        document.getElementById('imageDisplay').innerHTML =
            `
        <img src=${currentProfile.image} alt=${currentProfile.name} />
        `;
    } else {
        //no more profiles
        window.location.reload();
    }


}