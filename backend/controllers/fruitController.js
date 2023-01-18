import fruitDB from "../models/fruitModel.js";

// [-----LOGIC: ADD FRUIT-----]
export const addFruit = (req, res) => { 
    //create new user
    const fruit = new fruitDB({title: req.body.title, image: req.file.filename})
    //save fruit
    fruit.save()
    .then(data => res.status(200).json({ message:"Fruit added successfully...!", fruit: data }))
    .catch(err => res.status(404).json({ message:"Fruit already exist..!", error: err }))
}

// [-----LOGIC: READ FRUITS-----]
export const getFruits = async (req, res) => {
    if(req.params.id){
        //find fruit by id
        fruitDB.findById(req.params.id)
        .then(data => {
            if(!data){ res.status(404).json({message: "Not found fruit with id " + req.params.id}) }
            else{ res.status(200).send({ message:"Fruit data fetched successfully...!", fruit: data }) }
        })
        .catch(err => res.status(404).json({ message:"Error retrieving fruit with id...! " + req.params.id }))
    }else{
        //find all fruits
        fruitDB.find()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(404).json({ message:"Some error occurred while fetching fruits...!", error: err }))
    }
};

// [-----LOGIC: UPDATE FRUIT-----]
export const updateFruit = (req, res) => {  
    const id = req.params.id;
    fruitDB.findByIdAndUpdate(id, req.body)
    .then(data => {
        if(!data){ res.status(404).json({ message: "Not found fruit with id" + id }) }
        else{ res.status(201).json({ message:"Fruit data updated successfully...!" }) }
    })
    .catch(err => res.status(404).json({ message:"Error while updating fruit...!" }))
};

// [-----LOGIC: DELETE FRUIT-----]
export const deleteFruit = (req, res) => {
    const id = req.params.id;
    fruitDB.findByIdAndDelete(id, req.body)
    .then(data => {
        if(!data){ res.status(404).json({message: "Not found fruit with id " + id}) }
        else{ res.status(201).json({ message:"Fruit deleted successfully...!" }) }
    })
    .catch(err => res.status(404).json({ message:"Error while deleting fruit...!" }))
};