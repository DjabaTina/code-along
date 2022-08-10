function Button({ lable }) {
  return (
    <button className="border-2 border-orange-500 py-2 px-5 rounded-full text-orange-500 hover:bg-orange-500 hover:">
      {lable}
    </button>
  );
}

export default Button;
