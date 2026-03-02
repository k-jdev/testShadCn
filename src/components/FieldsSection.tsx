import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RiSubtractLine, RiAddLine } from "@remixicon/react";

export function FieldsSection() {
  const [gpuCount, setGpuCount] = useState(8);
  const [wallpaper, setWallpaper] = useState(true);
  const [terms, setTerms] = useState(false);
  const [priceRange, setPriceRange] = useState([200, 800]);

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Fields</CardTitle>
        <CardDescription>
          Various field components for your forms.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          {/* Compute Environment — Radio Card Group */}
          <FieldSet>
            <FieldLegend variant="label">Compute Environment</FieldLegend>
            <FieldDescription>
              Select the compute environment for your cluster.
            </FieldDescription>
            <RadioGroup defaultValue="kubernetes">
              <FieldLabel htmlFor="kubernetes-r2h">
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>Kubernetes</FieldTitle>
                    <FieldDescription>
                      Run GPU workloads on a K8s cluster.
                    </FieldDescription>
                  </FieldContent>
                  <RadioGroupItem value="kubernetes" id="kubernetes-r2h" />
                </Field>
              </FieldLabel>
              <FieldLabel htmlFor="vm-z4k">
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>Virtual Machine</FieldTitle>
                    <FieldDescription>
                      Access a cluster to run GPU workloads.
                    </FieldDescription>
                  </FieldContent>
                  <RadioGroupItem value="vm" id="vm-z4k" />
                </Field>
              </FieldLabel>
            </RadioGroup>
          </FieldSet>

          <Separator />

          {/* Number of GPUs — Counter */}
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>Number of GPUs</FieldTitle>
              <FieldDescription>You can add more later.</FieldDescription>
            </FieldContent>
            <div className="flex items-center">
              <Input
                id="gpu-count"
                type="number"
                min={0}
                max={64}
                value={gpuCount}
                onChange={(e) => {
                  const v = parseInt(e.target.value);
                  if (!isNaN(v)) setGpuCount(Math.min(64, Math.max(0, v)));
                }}
              />
              <Button
                variant="outline"
                size="icon"
                type="button"
                onClick={() => setGpuCount((c) => Math.max(0, c - 1))}
                disabled={gpuCount <= 0}
              >
                <RiSubtractLine className="size-4" />
                <span className="sr-only">Decrease</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                type="button"
                onClick={() => setGpuCount((c) => Math.min(64, c + 1))}
                disabled={gpuCount >= 64}
              >
                <RiAddLine className="size-4" />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
          </Field>

          <Separator />

          {/* Wallpaper Tinting — Switch */}
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>Wallpaper Tinting</FieldTitle>
              <FieldDescription>
                Allow the wallpaper to be tinted.
              </FieldDescription>
            </FieldContent>
            <Switch
              id="wallpaper"
              checked={wallpaper}
              onCheckedChange={setWallpaper}
            />
          </Field>

          <Separator />

          {/* Terms — Checkbox */}
          <FieldLabel htmlFor="terms">
            <Field orientation="horizontal">
              <Checkbox
                id="terms"
                checked={terms}
                onCheckedChange={(checked) => setTerms(checked === true)}
              />
              <FieldContent>
                <FieldTitle>I agree to the terms and conditions</FieldTitle>
              </FieldContent>
            </Field>
          </FieldLabel>

          <Separator />

          {/* Price Range — Slider */}
          <FieldSet>
            <FieldLegend variant="label">Price Range</FieldLegend>
            <FieldDescription>
              Set your budget range (${priceRange[0]} – ${priceRange[1]}).
            </FieldDescription>
            <Slider
              min={0}
              max={1000}
              step={50}
              value={priceRange}
              onValueChange={setPriceRange}
            />
          </FieldSet>
        </FieldGroup>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Button>Submit</Button>
        <Button variant="outline">Cancel</Button>
      </CardFooter>
    </Card>
  );
}
