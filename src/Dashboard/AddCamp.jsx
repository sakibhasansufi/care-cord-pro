

const AddCamp = () => {
    return (
        <div>
            <h2 className="text-4xl mx-auto  font-bold">Add Item</h2>
            <section>
                <form>
                    <label >Camp Name</label> <br />
                    <input type="text" name="name" placeholder="Camp Name" className="w-auto md:w-[500px] px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring mt-2 mb-2" /> <br />
                    <label >Upload Camp Image</label> <br />
                    <input type="file" name="name" placeholder="Upload Camp Image" className="w-auto md:w-[500px] px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring mt-2 mb-2" /> <br />
                    <div className=" grid-cols-1 md:grid grid-cols-2 gap-[6rem]">
                        <div>
                            <label >Camp Fees</label> <br />
                            <input type="text" name="name" placeholder="Camp Image" className="w-auto md:w-[200px] px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring mt-2 mb-2" />
                        </div>

                        <div>
                            <label >Camp Fees</label> <br />
                            <input type="text" name="name" placeholder="Camp Image" className="w-auto md:w-[200px] px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring mt-2 mb-2" />
                        </div>

                    </div>


                    <div className=" grid-cols-1 md:grid grid-cols-2 gap-[6rem]">
                        <div>
                            <label >Location</label> <br />
                            <input type="text" name="name" placeholder="Location" className="w-auto md:w-[200px] px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring mt-2 mb-2" />
                        </div>

                        <div>
                            <label >Health Care Professional Name</label> <br />
                            <input type="text" name="name" placeholder="Health Care Professional Name" className="w-auto md:w-[200px] px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring mt-2 mb-2" />
                        </div>

                    </div>


                    <label >Description of the camp</label> <br />
                    <textarea name="" id=""  placeholder="Description" className="w-auto md:w-[500px] h-[100px] px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring mt-2 mb-2"></textarea> <br />

                    <input type="submit" value="Add Camp" className="btn btn-primary" />
                </form>
            </section>
        </div>
    );
};

export default AddCamp;