import { useState } from "react";

const SignUp = () => {
  // 폼 데이터를 객체 형태로 관리
  const [formData, setFormData] = useState({
    name: '',
    job: '직장인',
    gender: '',
    text: ''
  })

  // 모든 입력 필드의 변경을 처리하는 함수
  const handleInputChange = (e) => {
    const {name, value} = e.target;

    setFormData({...formData, [name]: value})
  }

  // 폼 제출 시 데이터를 콘솔에 출력하는 함수
  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
    console.log("제출 데이터: ", formData);
  }

  return(
    <div className="sign-up">
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="name">이름</label>
          <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="이름을 입력하세요"
          />
        </p>
        <p>
          <label htmlFor="job">직업</label>
          <select 
            name="job" 
            value={formData.job} 
            onChange={handleInputChange} 
          >
            <option value="직장인">직장인</option>
            <option value="학생">학생</option>
            <option value="프리랜서">프리랜서</option>
          </select>
        </p>
        <p>
          <label htmlFor="gender">성별</label>
            <label><input 
              type="radio"
              name="gender"
              value="남자"
              checked={formData.gender === "남자"}
              onChange={handleInputChange}
            />남자</label>
            <label><input 
              type="radio"
              name="gender"
              value="여자"
              checked={formData.gender === "여자"}
              onChange={handleInputChange}
            />여자</label>
        </p>
        <p>
          <label htmlFor="text">자기소개</label>
          <textarea
            name="text"
            value={formData.text}
            onChange={handleInputChange}
            rows={5}
            cols={10}
          />
        </p>
        <button type="submit">가입</button>
      </form>
    </div>
  )
}

export default SignUp;