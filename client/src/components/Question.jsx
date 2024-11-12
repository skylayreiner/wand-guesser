import PropTypes from 'prop-types';

export default function Question({ handleSubmit, questionInfo }) {
  const { wandInfo, options } = questionInfo;
  console.log(options)
  return (
    <div className="mx-auto max-w-6xl bg-black flex min">
      <div className="w-3/5 min-h-[80dvh]">
        <img className="object-cover" src={wandInfo.img} alt="Wands" />
      </div>
      <div className="relative flex flex-col w-2/3 m-10 space-y-2 mt-10">
        <h2 className="text-4xl">Whose wand is this?</h2>
        <h3 className="text-2xl italic">Wand Details</h3>
        <ul className="flex flex-col">
          <li className="inline-flex gap-1">Wood Type:<p className="font-bold">{wandInfo.woodType}</p></li>
          <li className="inline-flex gap-1">Core: <p className="font-bold">{wandInfo.core}</p></li>
          <li className="inline-flex gap-1">Length: <p className="font-bold">{wandInfo.length}</p></li>
        </ul>
        <div className="grid gap-1 w-96 pt-5">
          {
            options.map((option) => (
              <button key={option.id} onClick={() => handleSubmit(option.owner)} className="bg-slate-100 h-14">{option.owner}</button>
            ))
          }
        </div>
      </div>
    </div>
  )
};

Question.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  questionInfo: PropTypes.shape({
    wandInfo: PropTypes.shape({
      img: PropTypes.string,
      woodType: PropTypes.string,
      core: PropTypes.string,
      length: PropTypes.string,
    }).isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};
