function ImageURL({ formData, setFormData }) {
  return (
    <div className="bg-gray-50 p-5 rounded-xl">
      <label className="text-sm text-gray-600">Image URL</label>

      <input
        type="text"
        placeholder="https://example.com/image.jpg"
        value={formData.image}
        onChange={(e) =>
          setFormData({ ...formData, image: e.target.value })
        }
        className="w-full mt-2 p-2 border rounded-md outline-none"
      />

      {formData.image && (
        <img
          src={formData.image}
          alt="preview"
          className="mt-3 w-32 h-32 object-cover rounded"
        />
      )}
    </div>
  );
}

export default ImageURL;