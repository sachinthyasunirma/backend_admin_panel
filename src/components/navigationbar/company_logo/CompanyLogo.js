import config_url from "@/config/config_url";
import { ButtonBase } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";

function CompanyLogo() {
  return (
    <>
      <ButtonBase
        sx={{
          textTransform: "uppercase",
        }}
        disableRipple
        component={Link}
        href={config_url.defaultPath}
      >
        SASHIELIGHT
      </ButtonBase>
    </>
  );
}

export default CompanyLogo;
