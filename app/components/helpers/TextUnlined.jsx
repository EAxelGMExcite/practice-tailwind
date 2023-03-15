import tailwindConfig from "../../../tailwind.config";

const styleMark = {
  background: tailwindConfig.theme.extend.colors.primary,
  color: "white",
  padding: "3px 5px",
};

const styleHr = {
  border: `1px solid ${tailwindConfig.theme.extend.colors.primary}`,
};

export const HrCustom = () => {
  return (
    <div>
      <hr style={styleHr} />
    </div>
  );
};

const TextUnlined = ({ text = "" }) => {
  return (
    <div>
      <mark className="px-2" style={styleMark}>
        {text}
      </mark>
      <div>
        <HrCustom />
      </div>
    </div>
  );
};

export default TextUnlined;
