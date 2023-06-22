import { Box } from "@mui/material";
import { Link } from "react-scroll";

const ProjectNavBar = ({ projects }) => {
	return (
		<Box
			sx={{
				position: "fixed",
				top: "50%",
				right: 0,
				transform: "translateY(-50%)",
			}}
		>
			<ul>
				{projects.map((project, index) => (
					<li key={index}>
						<Link
							activeClass='active'
							to={project.name}
							spy={true}
							smooth={true}
							duration={500}
						>
							{project.title}
						</Link>
					</li>
				))}
			</ul>
		</Box>
	);
};

export default ProjectNavBar;