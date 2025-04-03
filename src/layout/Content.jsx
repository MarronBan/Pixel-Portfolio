
function Content({ children, onScroll }) {
  return (
    <div 
      className="flex-1 overflow-y-auto hide-scrollbar bg-white"
      onScroll={onScroll}
    >
      {children}
    </div>
  )
}

export default Content
