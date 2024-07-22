import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import BorderColorSharpIcon from '@mui/icons-material/BorderColorSharp'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'

const AffItem = (props) => {
  const { affs } = props
  const { id, content } = affs
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const handleEditAffirmationClick = (e) => {
    let editEl = e.target.closest('li')
    let editId = editEl.getAttribute('id')
    console.log('editId:' + editId)
    // navigate(`${BASE_URL}edit`, {
    //   state: {
    //     affirmationId: editId,
    //   },
    // }); // Pass optional second argument
  }

  return (
    <li ref={setNodeRef} style={style} key={id} id={id} className="py-1">
      <div className="">
        <div className="bg-white flex flex-row border border-slate-300 rounded-md">
          <button
            {...attributes}
            {...listeners}
            className="border-r border-slate-300 cursor-move touch-none p-1"
          >
            <DragIndicatorIcon fontSize="small" style={{ color: 'silver' }} />
          </button>
          <p className="w-full text-center font-thin py-4 px-4">{content}</p>
          <button
            onClick={(e) => {
              handleEditAffirmationClick(e)
            }}
            className="cardEdit cursor-pointer rounded-tr rounded-br"
          >
            <BorderColorSharpIcon fontSize="small" style={{ color: 'white' }} />
          </button>
        </div>
      </div>
    </li>
  )
}

export default AffItem
