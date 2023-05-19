
const MyModal = ({ handleUpdate, modalData }) => {
    return (
        <div>
            <div className=' bg-white rounded-md '>
                <div className="card-body    ">
                    <form onSubmit={handleUpdate} className='w-[450px]'>
                        <input type="hidden" name="id" readOnly value={modalData._id} />
                        <div className="flex space-x-3 mb-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name='price' defaultValue={modalData.price} className="input input-bordered " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="text" name='quantity' readOnly defaultValue={modalData.quantity} className="input input-bordered " />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea name='description' defaultValue={modalData?.description} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                        </div>

                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyModal;