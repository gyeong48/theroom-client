import { useNavigate } from 'react-router-dom'

const useCustomMove = () => {
  const navigate = useNavigate();

  const moveToError = () => {
    navigate({ pathname: "/error/500" })
  }

  return { moveToError }
}

export default useCustomMove;