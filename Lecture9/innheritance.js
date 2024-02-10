class Electronics {
    getCategoryName() {
        return 'Electronics';
    }
}

class Camera extends Electronics {
    getSpecs() {
        console.log("specs of camera is .....");
    }
}

c = new Camera();

console.log(c.toString());