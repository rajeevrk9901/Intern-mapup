import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "antd";
import { toggleNightMode } from "../redux/actions";

const NightModeToggle = () => {
    const dispatch = useDispatch();
    const isNightMode = useSelector((state) => state.isNightMode);

    const handleToggle = (checked) => {
        dispatch(toggleNightMode(checked));
    };

    return (
        <div className="night-mode-toggle">
            <span>Dark Mode</span>
            <Switch checked={isNightMode} onChange={handleToggle} />
        </div>
    );
};

export default NightModeToggle;
