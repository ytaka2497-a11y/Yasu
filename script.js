local placeID = game.PlaceId
if placeID ~= 10449761463 then
print("This game is not The Strongest Battlegrounds")
return
end
--

--
local runService = game:GetService("RunService")
local players = game:GetService("Players")
local localPlayer = players.LocalPlayer
local character = localPlayer.Character
local humanoid = character and character:WaitForChild("Humanoid")
local humanoidRootPart = character and character:WaitForChild("HumanoidRootPart")
local playerUserId = localPlayer.UserId
local playerName = localPlayer.Name

--

-- exploits
local function exploits()

if workspace:GetAttribute("VIPServer") ~= tostring(playerUserId) then
    workspace:SetAttribute("VIPServer", tostring(playerUserId))
end
if workspace:GetAttribute("VIPServerOwner") ~= playerName then
    workspace:SetAttribute("VIPServerOwner", playerName)
end
--

if localPlayer:GetAttribute("ExtraSlots") == nil then
    localPlayer:SetAttribute("ExtraSlots", false)
end
--
if localPlayer:GetAttribute("EmoteSearchBar") == nil then
    localPlayer:SetAttribute("EmoteSearchBar", false)
end
--
if workspace:GetAttribute("NoDashCooldown") == nil then
    workspace:SetAttribute("NoDashCooldown", false)
end
--
if workspace:GetAttribute("NoFatigue") == nil then
    workspace:SetAttribute("NoFatigue", false)
end
end
exploits()

--
local tspeed = 0.1
local tpwalking = false

--

--
local Rayfield = loadstring(game:HttpGet('https://sirius.menu/rayfield'))()

local Window = Rayfield:CreateWindow({
Name = "TSB Script (open source)",
Icon = "user",
LoadingTitle = "Rayfield",
LoadingSubtitle = "by Emerson",
ShowText = "Interface",
Theme = "Default",

ToggleUIKeybind = "K",

DisableRayfieldPrompts = false,
DisableBuildWarnings = false,

ConfigurationSaving = {
Enabled = true,
FolderName = nil,
FileName = "TSB-Script"
},

Discord = {
Enabled = false,
Invite = "noinvitelink",
RememberJoins = true
},

KeySystem = false,
KeySettings = {
Title = "Untitled",
Subtitle = "Key System",
Note = "No method of obtaining the key is provided",
FileName = "Key",
SaveKey = true,
GrabKeyFromSite = false,
Key = {"Hello"}
}
})
--

-- as tabs-
local mainTab = Window:CreateTab("Main", "user")
local teleportTab = Window:CreateTab("Teleport", "map")
--

localPlayer.CharacterAdded:Connect(function(char)
character = char
humanoid = character:WaitForChild("Humanoid")
humanoidRootPart = character:WaitForChild("HumanoidRootPart")
end)

mainTab:CreateDivider()

mainTab:CreateToggle({
Name = "Speed Boost",
CurrentValue = false,
Flag = "SpeedBoostToggle",
Callback = function(Value)
tpwalking = Value
end,
})

mainTab:CreateSlider({
Name = "Speed",
Range = {0, 5},
Increment = 0.1,
Suffix = "*",
CurrentValue = 0.1,
Flag = "SpeedBoostSlider",
Callback = function(Value)
tspeed = Value
end,
})

runService.Heartbeat:Connect(function()
if tpwalking and character and humanoid then
if humanoid.MoveDirection.Magnitude > 0 then
if tspeed then
humanoidRootPart.CFrame = humanoidRootPart.CFrame + (humanoid.MoveDirection * tspeed)
end
end
end
end)

mainTab:CreateToggle({
Name = "Jump Boost",
CurrentValue = false,
Flag = "JumpBoostToggle",
Callback = function(Value)
humanoid.UseJumpPower = not Value
end,
})

mainTab:CreateSlider({
Name = "Jump",
Range = {7.2, 500},
Increment = 0.1,
Suffix = "%",
CurrentValue = 7.2,
Flag = "JumpBoostSlider",
Callback = function(Value)
humanoid.JumpHeight = Value
end,
})

mainTab:CreateDivider()

mainTab:CreateSlider({
Name = "Gravity",
Range = {0, 192.6},
Increment = 0.1,
Suffix = "%",
CurrentValue = 192.6,
Flag = "GravitySlider",
Callback = function(Value)
workspace.Gravity = Value
end,
})

mainTab:CreateSlider({
Name = "FOV",
Range = {0, 120},
Increment = 0.1,
Suffix = "%",
CurrentValue = 70,
Flag = "FOVSlider",
Callback = function(Value)
workspace.CurrentCamera.FieldOfView = Value
end,
})

mainTab:CreateDivider()

mainTab:CreateSection("Exploits")

mainTab:CreateToggle({
Name = "No Dash Cooldown",
CurrentValue = false,
Flag = "noDashCooldownToggle",
Callback = function(Value)
workspace:SetAttribute("NoDashCooldown", Value)
end,
})

mainTab:CreateToggle({
Name = "No Fatigue",
CurrentValue = false,
Flag = "noFatigueToggle",
Callback = function(Value)
workspace:SetAttribute("NoFatigue", Value)
end,
})

mainTab:CreateDivider()

mainTab:CreateToggle({
Name = "Emotes Extra Slots",
CurrentValue = false,
Flag = "emotesExtraSlotsToggle",
Callback = function(Value)
localPlayer:SetAttribute("ExtraSlots", Value)
end,
})

mainTab:CreateToggle({
Name = "Emotes Search Bar",
CurrentValue = false,
Flag = "emotesSearchBarToggle",
Callback = function(Value)
localPlayer:SetAttribute("EmoteSearchBar", Value)
end,
})

-- tp tab

teleportTab:CreateSection("Teleports")

teleportTab:CreateButton({
Name = "middle",
Callback = function()
humanoidRootPart.CFrame = CFrame.new(148, 441, 27)
end
})

teleportTab:CreateButton({
Name = "Atomic Room",
Callback = function()
humanoidRootPart.CFrame = CFrame.new(1079, 155, 23003)
end
})

teleportTab:CreateButton({
Name = "Death Counter Room",
Callback = function()
humanoidRootPart.CFrame = CFrame.new(-92, 29, 20347)
end
})

teleportTab:CreateButton({
Name = "Baseplate",
Callback = function()
humanoidRootPart.CFrame = CFrame.new(968, 20, 23088)
end
})

teleportTab:CreateButton({
Name = "Mountain 1",
Callback = function()
humanoidRootPart.CFrame = CFrame.new(266, 699, 458)
end
})

teleportTab:CreateButton({
Name = "Mountain 2",
Callback = function()
humanoidRootPart.CFrame = CFrame.new(551, 630, -265)
end
})

teleportTab:CreateButton({
Name = "Mountain 3",
Callback = function()
humanoidRootPart.CFrame = CFrame.new(-107, 642, -328)
end
})
