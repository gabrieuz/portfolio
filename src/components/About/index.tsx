import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { userData } from "@/utils/userData";
import { AboutSection } from "./styles";

export const About = () => {
	return (
		<AboutSection id="about">
			<Container>
				<Text type="heading2" color="grey4">
					About me
				</Text>
				<Text type="body2" color="grey2">
					{userData.bio}
				</Text>
			</Container>
		</AboutSection>
	);
};
