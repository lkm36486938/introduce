import * as S from './MainProfile.style';
import { mySpec } from '../../models/mySpec';

export default function MainProfile() {

    return (
        <S.Container>
            <S.Wrapper>
                <S.Logo>
                    <img src="/assets/front-end-developer.png" alt="front end Developer Img" />
                </S.Logo>
                <S.Content>
                    <h1>이 경 민</h1>
                    <span>Front End Developer</span>
                    
                    <S.Specs>
                        {mySpec.map(name => (
                            <span key={name}>{name}</span>
                        ))}
                    </S.Specs>
                </S.Content>
            </S.Wrapper>
        </S.Container>
    )
}