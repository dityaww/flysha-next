import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { logout } from "../action";

function ButtonLogout() {
  return (
    <div className="space-y-2">
      <form action={logout}>
        <Button
          type="submit"
          variant="default"
          className="w-full justify-start"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </form>
    </div>
  );
}

export default ButtonLogout;
